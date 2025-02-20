const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const readline = require("readline");
const fs = require("fs");
const path = require("path");
const ProgressBar = require("progress");


const musicFolderPath = "./music";
const logFolderPath = "./logs";

if (!fs.existsSync(musicFolderPath)) {
    fs.mkdirSync(musicFolderPath);
}

if (!fs.existsSync(logFolderPath)) {
    fs.mkdirSync(logFolderPath);
}

function sanitizeFileName(fileName) {
    return fileName.replace(/[^\w\s]/gi, '');
}


async function downloadVideo(url) {
    try {
        if (!ytdl.validateURL(url)) {
            throw new Error("Invalid YouTube URL");
        }


        const info = await ytdl.getInfo(url);
        // Extract video title
        const videoTitle = info.videoDetails.title;

        // Sanitize video title to remove special characters
        const sanitizedTitle = sanitizeFileName(videoTitle);

        // Log the downloaded song name
        fs.appendFileSync(path.join(logFolderPath, "downloaded_songs.log"), `${sanitizedTitle}\n`);

        // Get the best audio stream
        const audioStream = ytdl(url, { quality: 'highestaudio' });

        // Start the ffmpeg process
        const command = ffmpeg(audioStream)
            .audioBitrate(128)
            .on('progress', progress => {
                bar.update(progress.percent / 100);
            })
            .on('end', () => {
                bar.update(1); // Update progress bar to 100%
                const endTime = new Date();
                const elapsedTime = (endTime - startTime) / 1000;
                console.log('\n✅ Download complete!');
                console.log(`⏱️ Time taken: ${elapsedTime.toFixed(1)}s`);
                promptForURL(); // Prompt user for next URL
            })
            .on('error', (err) => {
                console.error('❌ Error during conversion:', err);
                promptForURL(); // Prompt user for next URL after error
            });

        // Create progress bar
        const bar = new ProgressBar('  Downloading [:bar] :percent', {
            complete: '\u001b[42m \u001b[0m',
            incomplete: ' ',
            width: 30,
            total: 100
        });

        console.log(`\n🚀 Downloading "${sanitizedTitle}"...`);

        // Save the output to a file
        command.save(path.join(musicFolderPath, `${sanitizedTitle}.mp3`));

        const startTime = new Date();
    } catch (error) {
        console.error("❌ Error:", error.message);
        promptForURL();
    }
}

console.log("🎵 Welcome to KamiP3 Downloader!");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function promptForURL() {
    rl.question(
        '🔗 Enter YouTube video URL (or type "exit" to quit): ',
        async (url) => {
            if (url.toLowerCase() === "exit") {
                rl.close();
                return;
            }
            await downloadVideo(url);
        }
    );
}
promptForURL();
