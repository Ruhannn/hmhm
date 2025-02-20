var a = 1;
while (a < 50) {
    if (a % 2 == 0) {
        console.log(a, "is even");
    } else {
        console.log(a, "is odd");
    }
    a += 1
}
var name1 = "ruhan bin rouf";
console.log(name1.includes("ruhan"));
console.log(name1.includes("yu"));
console.log(name1.includes("i"));
console.log(name1.includes("8"));
console.log(name1.substring(1, 3));
function wakeUp() {
    console.log("wake Up");
    console.log("cutee");
    console.log("say uwu");
}
wakeUp();
function bringSingara(money) {
    console.log("taka disi", money);
    console.log("mama singara den");
}
var taka = 300;
bringSingara(taka);

function add(num1, num2) {
    console.log("Going to add:", num1, num2);
}

add(125, 96);
function sum(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(45, 5, 53, 4, 8)

function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
    return sum;
    // console.log("i need a  phone");
    // return 18
    // return "helllo"
    // return "i am hoeny"
}
add(54, 46);
var total = add(80, 20)

console.log("total", total)
function bringSingara(money) {
    var singaraprice = 10;
    var quantity = money / singaraprice
    return quantity;
}
var mytaka = 150
var singaras = bringSingara(mytaka);
console.log("eating singgaras :", singaras);

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
console.log(finalResult);



