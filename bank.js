document
  .getElementById("submit-deposit")
  .addEventListener("click", function () {
    const depositField = document.getElementById("user-deposit");
    const totalDeposit = document.getElementById("total-deposit");
    const totalBalance = document.getElementById("total-balance");
    if (
      typeof parseFloat(depositField.value) === "number" &&
      depositField.value.length != 0
    ) {
      const previousDeposit = parseFloat(depositField.value);
      const currentDeposit = parseFloat(totalDeposit.innerText);
      const currentBalance = parseFloat(totalBalance.innerText);
      totalDeposit.innerText = previousDeposit + currentDeposit;
      totalBalance.innerText = currentBalance + previousDeposit;
      depositField.value = "";
    } else {
      alert("provide valid amount");
    }
  });

document
  .getElementById("submit-withdraw")
  .addEventListener("click", function () {
    const withdrawField = document.getElementById("user-withdraw");
    const totalWithdraw = document.getElementById("total-withdraw");
    const totalBalance = document.getElementById("total-balance");
    if (
      typeof parseFloat(withdrawField.value) === "number" &&
      withdrawField.value.length != 0
    ) {
      const previousWithdraw = parseFloat(withdrawField.value);
      const currentWithdraw = parseFloat(totalWithdraw.innerText);
      const currentBalance = parseFloat(totalBalance.innerText);
      if (previousWithdraw < currentBalance - 500) {
        totalWithdraw.innerText = previousWithdraw + currentWithdraw;
        totalBalance.innerText = currentBalance - previousWithdraw;
        withdrawField.value = "";
      } else {
        alert("your balance is sufficient please deposit amount");
      }
    } else {
      alert("provide valid amount");
    }
  });
