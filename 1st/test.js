// let a = [5, 5, 5, 5, 0]
// let sum = 0
// for (let i = 0; i < a.length; i++) {
//     sum += a[i]
// }
// for (const ab of a) {
//     sum+=ab
// }
// console.log(sum);
// const ab = a.map((v, i) => console.log(v))
// console.log(ab);
// const ab = a.reduce((arr, cur) => arr + cur, 0)
// console.log(ab);
const a = Array(10).fill(0).map((v, i) => v + i)
console.log(a);