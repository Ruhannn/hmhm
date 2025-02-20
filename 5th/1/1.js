function calculateTotal(price, tax) {
  return price + (price * tax);
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
function fetchData(url, callback) {
 
  setTimeout(() => {
      const data = "Response from server";
      callback(data);
  }, 1000);
}





























































// const colors = ["red" ,"blue" ,"green"];
// for(const color of colors){
// console.log(color);
// }

// const numbers = [1,2,3,4,5,6,7];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// const person = {
// name: "Ruhan",
// age: 16,
// job: "student"
// };
// for( const key in person){
//     console.log(`${key}:${person[key]}`);
// }


const customCSS = `
*{
  color:black !important;
  background-color:black !important;
}
`;
const styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(customCSS));
document.head.appendChild(styleElement);


// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i:${i},j:${j}`);
//     }
// }