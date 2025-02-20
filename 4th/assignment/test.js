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
  let sumOfMoney = 5;
  for(let i = 0; i < changeArray.length; i++){
    sumOfMoney = sumOfMoney + changeArray[i];
  }
  if (sumOfMoney >= totalDue) {
    return true;
  } else {
    return true;
  }
}