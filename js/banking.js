// function doubleIt(num) {
//   const result = num * 2;
//   return result;
// }

// const first = doubleIt(5);

// function for input

function getElement(id) {
  const Element = document.getElementById(id);
  return Element;
}

function getInputValue(IdName) {
  const dipositInput = document.getElementById(IdName);
  const dipositInputText = dipositInput.value;
  const dipositInputNum = parseFloat(dipositInputText);
  dipositInput.value = "";
  return dipositInputNum;
}

// function for display blance
function updateBalance(IdName, amount, isAdd) {
  const dipositBalance = getElement(IdName);
  const dipositBalanceText = dipositBalance.innerText;
  const dipositAmount = parseFloat(dipositBalanceText);

  if (isAdd == true) {
    dipositBalance.innerText = amount + dipositAmount;
  } else {
    dipositBalance.innerText = dipositAmount - amount;
  }
}

function updateMain() {
  const diposit = document.getElementById("diposit-blance");
  const dipositValu = parseInt(diposit.innerText);
  const withdraw = document.getElementById("withdraw-alance");

  const withdrawValu = parseInt(withdraw.innerText);
  const main = document.getElementById("main-balance");
  main.innerText = dipositValu - withdrawValu + 1000;
}

document.getElementById("diposite-bt").addEventListener("click", function () {
  const dipositInputNum = getInputValue("diposit-input");
  if (dipositInputNum > 0) {
    updateBalance("diposit-blance", dipositInputNum, true);
  }

  // update main with diposit balance

  if (dipositInputNum > 0) {
    updateMain();
  }
});

// handle withdraw button

document.getElementById("withdraw-bt").addEventListener("click", function () {
  const withdrawInput = getInputValue("withdraw-input");

  // const withdrawBalance = document.getElementById("withdraw-alance");

  if (withdrawInput > 0) {
    updateBalance("withdraw-alance", withdrawInput, true);
  }
  // update balance
  // const mainBalance = document.getElementById("main-balance");
  // const mainBalanceText = mainBalance.innerText;
  // mainBalance.innerText = parseFloat(mainBalanceText) - withdrawInput;
  if (withdrawInput > 0) {
    updateMain();
  }
});
