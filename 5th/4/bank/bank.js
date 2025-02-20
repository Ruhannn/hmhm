document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const depositTotalElement = document.getElementById("depositTotal");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  depositTotalElement.innerText = newDepositAmount;
  const currentDeposit = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDeposit;
  const balanceTotalElement = document.getElementById("Balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  depositField.value = " ";
});
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawFieldAmountString = withdrawField.value;
  const newWithdrawFieldAmount = parseFloat(newWithdrawFieldAmountString);
  const WithdrawTotalElement = document.getElementById("withdraw-total");
  withdrawField.value = "";
  if (isNaN(newWithdrawFieldAmount)) {
    alert("please provide a valid number");
    return;
  }
  const previousWithdrawTotalString = WithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("Balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  withdrawField.value = "";
  if (newWithdrawFieldAmount > previousBalanceTotal) {
    alert("baper Taka ses");
    return;
  }
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawFieldAmount;
  WithdrawTotalElement.innerText = currentWithdrawTotal;
  const newBaLanceTotal = previousBalanceTotal - newWithdrawFieldAmount;
  balanceTotalElement.innerText = newBaLanceTotal;
  withdrawField.value = " ";
});
