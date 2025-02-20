const lyrics =
  "I know I said goodbye and baby, you said it too But when I touch her I feel like I'm cheating on you I thought that I'd be better when I found someone new But when I touch her I feel like I'm cheating on you";
const search = "BABY";
const lyricsLowerCase = lyrics.toLowerCase();
const searchLowerCase = search.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchLowerCase);
const doesExistOneLine = lyrics.toLowerCase().includes(searchLowerCase);
console.log(doesExist);
console.log(doesExistOneLine);
console.log(lyrics.indexOf("too"));
if (lyrics.indexOf("But") !== -1) {
  console.log("exists inside that line");
}
else {
  console.log("cannot find it");
}
console.log(lyrics.startsWith("i"));
if (lyrics.startsWith("I")) {
  console.log("yes");
}
else {
  console.log("No");
}
const fileName = "1.js";
const otherFile = "my.png";
if (fileName.endsWith(".js")) {
  console.log("yes this is a javascript");
}
else {
  console.log("no this file is not a javascript");
}
const parts = lyrics.split(" ");
const sentences = lyrics.split('.');
const cha = lyrics.split('');
console.log(parts)
console.log(sentences)
console.log(cha)
const partial = lyrics.slice(9, 20)
console.log(partial);

const partial2 = lyrics.substring(9, 20);
console.log(partial2);
const lines = [
  "I know I said goodbye and baby You said it too",
  "But when I touch her I feel like I'm cheating on you",
  "I thought that I'd be better when I found someone new",
  "But when I touch her I feel like I'm cheating on you",
];
const newline = lines.join(" ");
console.log(newline);
const result = Math.pow(3, 8)
console.log(result);
const maleAge = 35;
const femaleAge = 25;
const gap = (maleAge - femaleAge);
console.log(gap);
if (gap < 5) {
  console.log("you guys can be friends");
}
else {
  console.log("you guys stay apart");
}
const number = 2.764677567567567567567567567567674574574745745674634542676809876544231245678905756;
const fullNumber = Math.round(number);
console.log(fullNumber);
const result2 = Math.ceil(2.364677567567567567567567567567674574574745745674634542676809876544231245678905756)
console.log(result2);
const result3 = Math.floor(2.964677567567567567567567567567674574574745745674634542676809876544231245678905756)
console.log(result3);
for (let i = 0; i < 20; i++) {
  const Random = Math.round(Math.random() * 6);
  // const Random = (Math.random() * 6);
  console.log(Random);
}
let first = 5;
let second = 7;
console.log(first, second);
first = second;
second = first;
const temp = first;
first = second;
second = temp;
console.log(first, second);
function reverseWords(str) {
  const words = str.split(" ");
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reversed = result.join(" ")
  return reversed;
}

const text =
  "I know I said goodbye and baby, you said it too But when I touch her I feel like I'm cheating on you";
reverseWords(text);
