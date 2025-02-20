var roseGiven = 0;
while (roseGiven < 7) {
  console.log("rose cute")
  // roseGiven = roseGiven +1;
  // roseGiven += 1;
  console.log(roseGiven)
  roseGiven++;
}
var number = 1;
while (number <=
  100) {
  console.log(number);
  number = number + 2;

}
for (var number = 0; number < 7; number++) {
  console.log(number);
}
console.log('number');
for (var i = 0; i < 7; i++) {
  console.log(i)
}

for (var i = 0; i <= 7; i += 2) {
  console.log(i)
}
for (var i = 1; i <= 7; i += 2) {
  console.log(i)
}
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
}
var items = ["bottle", "mouse", "sunglass", "pen", "notebook"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  if (item == "pen") {
    continue;
  }
  console.log(item);
}
var items = ["bottle", "mouse", "sunglass", "pen", "notebook"];
for (var i = 0; i < items.length; i++) {
  var item = items[i];
  console.log(item);
}
var num = 0;
while (num <= 10) {
  console.log(num);
  num++;
}
var num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}
for (var i = 10; i >= 1; i--) {
  console.log(i)
}
var fruits = ["apple", "banana", "orange"];
var bananaIndex = fruits.indexOf("banana");
fruits[bananaIndex] = "mango";
var orangeIndex = fruits.indexOf("orange");
fruits[orangeIndex] = "watermelon";
console.log(fruits);

// You and your friends Tom, Jane, Jane and John got their final exam results. Your total
// score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56
// and John's total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends' grades using if-else.
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var johnScore = 40;
// my grade
if (myScore >= 80) {
  myGrade = "A";
} else if (myScoreScore >= 60) {
  myGrade = "B";
} else if (myScoreScore >= 50) {
  myGrade = "C";
} else if (myScoreScore >= 40) {
  myGrade = "D";
} else {
  myGrade = "F";
}
// Tom's grade
if (tomScore >= 80) {
  tomGrade = "A";
} else if (tomScore >= 60) {
  tomGrade = "B";
} else if (tomScore >= 50) {
  tomGrade = "C";
} else if (tomScore >= 40) {
  tomGrade = "D";
} else {
  tomGrade = "F";
}
// Jane's grade
if (janeScore >= 80) {
  janeGrade = "A";
} else if (janeScore >= 60) {
  janeGrade = "B";
} else if (janeScore >= 50) {
  janeGrade = "C";
} else if (janeScore >= 40) {
  janeGrade = "D";
} else {
  janeGrade = "F";
}
// Peter's grade
if (peterScore >= 80) {
  peterGrade = "A";
} else if (peterScore >= 60) {
  peterGrade = "B";
} else if (peterScore >= 50) {
  peterGrade = "C";
} else if (peterScore >= 40) {
  peterGrade = "D";
} else {
  peterGrade = "F";
}
// John's grade
if (johnScore >= 80) {
  johnGrade = "A";
} else if (johnScore >= 60) {
  johnGrade = "B";
} else if (johnScore >= 50) {
  johnGrade = "C";
} else if (johnScore >= 40) {
  johnGrade = "D";
} else {
  johnGrade = "F";
}
console.log("My grade: " + myGrade);
console.log("Tom's grade: " + tomGrade);
console.log("Jane's grade: " + janeGrade);
console.log("Peter's grade: " + peterGrade);
console.log("John's grade: " + johnGrade);

var num1 = 13;
var num2 = 79;
var num3 = 45;

var largestNumber;

if (num1 >= num2 && num1 >= num3) {
  largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largestNumber = num2;
} else {
  largestNumber = num3;
}

console.log("The largest number is: " + largestNumber);

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("The triangle is Isosceles.");
} else {
  console.log("The triangle is not Isosceles.");
}
