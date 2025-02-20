// ! 1
var text = 0;
while (text < 40) {
    console.log("ajke amar mon valo nai")
    text++;
}
// ! 2
for (var i = 58; i <= 98; i++) {
    console.log(i);
}

// ! 3
for (var i = 412; i <= 456; i += 2) {
    console.log(i)
}

// ! 4
for (var i = 581; i <= 623; i += 2) {
    console.log(i)
}
// ? 5

// ! 6
var topics = [
    "Javascript",
    "Variable type",
    "toFixed",
    "parseFloat",
    "remainder",
    "Array",
    "array length",
    "array index",
    "If",
    "else",
    "if else",
    "loop",
    "for",
    "while",
    "break",
    "continue"
];
console.log(topics)

//   ! 7
var items = [
    "iPhone 12",
    "Samsung Galaxy S21",
    "Google Pixel 5",
    "OnePlus 9",
    "Xiaomi Mi 11",
    "Sony Xperia 1 III",
    "LG Velvet 5G",
    "Motorola Edge",
    "Nokia 8.3",
];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item);
}

// ! 8 
for (var i = 30; i <= 86; i++) {
    console.log(i);
    if (i > 44) {
        break;
    }
}

// ! 9
var bookPrices = [150, 180, 210, 190, 220, 170, 195, 205, 198, 180];

for (var i = 0; i < bookPrices.length; i++) {
    var price = bookPrices[i];
    if (price < 200) {
        console.log(price);
    }
}

var bookPrices = [150, 180, 210, 190, 220, 170, 195, 205, 198, 180];
for (var i = 0; i < bookPrices.length; i++) {
    var bookPrice = bookPrices[i];
    if (bookPrice > 200) {
        continue;
    }
    console.log(bookPrice);
}


var a = 1;
while (a <= 100) {
    console.log(a);
    a++
}

