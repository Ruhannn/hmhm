var isSingle = true;
var salary = 5000;
var cars = 1;

if (isSingle == true && salary >= 50000 && cars >= 1
) {
    console.log("lets gooo");
}
else {
    console.log("go kill");
}
if (isSingle === true || salary > 50000) {
    console.log("eso relation kori")
}
else {
    console.log("ja beta muri kha")
}
var isSingle = true;
var salary = 25000;
var cars = 2;

if (isSingle === true && (salary > 50000 || cars >= 3)) {
    console.log("You are single and either earn more than 50000 or have 3 or more cars.");
} else {
    console.log("You are either not single or do not meet the salary or car criteria.");
}

