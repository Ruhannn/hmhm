function add(num1, num2 = 0) {
  const result = num1 + num2;
  return result;
}
const getPI = Math.PI
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const multiplier = x * y * z;
  const result = sum + multiplier;
  return result;
}
{
  console.log(doMath(5, 645, 4));
  const max = Math.max(34, 36, 56, 87, 4, 90);
  const numbers = [5, 4, 64, 565, 46, 4, 64, 56, 4, 4, 7, 457]
  const arrayMax = Math.max(numbers);
  console.log(arrayMax);
  console.log(...numbers);
}
let x = 5
let y = x
console.log(x, y);

y = 7
console.log(x, y);

let p = { 'job': 'web developer' }
let q = p
q = { job: "back end developer" }
console.log(p, q);

const square = x => x * x;
console.log(square(9))
{
  const square = [
    {
      id: "434",
      email: "tilrih@nib.co",
      name: "Hula Castro",
    },
  ];

  console.log(square[0].name);
}
const product = {
  count: 5000,
  data: [
    {
      id: "4",
      name: "Ricardo Wood",
      price: "2016593813",
    },
    {
      id: "434",
      name: "William Abbott",
      price: "18770774",
    },
  ],
};

console.log(product.data[1].price);

const user = {
  id: "675",
  name: "ruhan",
  address: {
    street: {
      first: "mirpure",
      second: "bijoy gange",
      uwu: "ijorgjiogrjiogvjrjgjgjgjgjgjgjgy"
    },
    city: "dhaka",
  }
};
const address = (user.address.street);
const add = address.first;
const add2 = address.second;
const add3 = address.uwu;
const final = add + " " + add2 + " " + add3;
console.log("final", final)

const numbers = [54, 5, 645, 65, 646, 4, 456, 4];
function doubleIt(num) {
  return num * 2
}
const doubleIt2 = n => n * 2
const result = numbers.map(doubleIt);
console.log("result", result)
