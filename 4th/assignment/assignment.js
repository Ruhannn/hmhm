// Solution-1

function cubeNumber(number) {
  if (typeof number !== "number" || number <= 0) {
    return "Invalid input";
  }
  return number ** 3;
}

// Solution-2

function matchFinder(string1, string2) {
  if (!string1 || !string2) {
    return "Please provide two input strings.";
  }
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}
// Solution-3

function sortMaker(arr) {
  if (arr.length !== 2) {
    return "Invalid Input";
  }
  if (
    typeof arr[0] !== "number" ||
    typeof arr[1] !== "number" ||
    arr[0] < 0 ||
    arr[1] < 0
  ) {
    return "Invalid Input";
  }
  if (arr[0] === arr[1]) {
    return "equal";
  }
  if (arr[0] > arr[1]) {
    return [arr[0], arr[1]];
  } else {
    return [arr[1], arr[0]];
  }
}

//  Solution-4

function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  const formattedAddress = street + "," + house + "," + society;
  return formattedAddress;
}

//  Solution-5

function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray)) {
    return "Please input an array";
  }
  else if (changeArray.length === 0) {
    return "Don't use empty array";
  }
  else if (totalDue < 0) {
    return "Don't use negative numbers";
  }
  let sumOfMoney = 0;
  for(let i = 0; i < changeArray.length; i++){
    sumOfMoney = sumOfMoney + changeArray[i];
  }
  if (sumOfMoney >= totalDue) {
    return true;
  } else {
    return false;
  }
}