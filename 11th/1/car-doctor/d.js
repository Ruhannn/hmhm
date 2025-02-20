// function addTwo(num1,num2){
//     return num1+num2;
// }
// const res = addTwo(56,76)
// console.log(res)
// function multiplyBy(x){
//     return function (y){
//         return x*y;
//     }
// }
// const multiplyByTwo = multiplyBy(8);
// const res = multiplyByTwo(3)
// console.log(res)
const nums = [1,2,3,4,5,6,7,8,9,10];
const k = nums.map(function (num){
    return num *2
})
console.log(k)