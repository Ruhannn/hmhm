let n = 256171;
let m = n
let lastDigit = n % 10;
let secondLastDigit = ((n - lastDigit) / 10) % 10;
if (lastDigit < secondLastDigit) {
    n = (n - lastDigit) / 10;
} else {
n = n - secondLastDigit * 10;
}
console.log(`input ${m} output ${n}`);

