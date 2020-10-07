//show buttons clicked to input

window.addEventListener("DOMContentLoaded", function () {
  let operation = "";
  let firstOperand = 0;
  let finalResult = 0;

  let result = document.querySelector("#result");

  const sum = (x, y) => {
    x + y;
  };

  const div = (x, y) => {
    x / y;
  };

  const mult = (x, y) => {
    x * y;
  };

  const sub = (x, y) => {
    x - y;
  };

  const numBtnClicked = function (event) {
    const numberPressed = event.target.value;
    if (result.value === "0") {
      result.value = numberPressed;
    } else {
      result.value += numberPressed;
    }
    finalResult = result.value;
  };

  const funcBtnClicked = function (event) {
    const funcPressed = event.target.value;
    console.log(funcPressed);
    switch (funcPressed) {
      case "=":
        switch (operation) {
          case "+":
            result.value = sum(
              parseFloat(firstOperand),
              parseFloat(result.value)
            );
            break;
          case "-":
            result.value = sub(
              parseFloat(firstOperand),
              parseFloat(result.value)
            );
            break;
          case "X":
            result.value = mult(
              parseFloat(firstOperand),
              parseFloat(result.value)
            );
            break;
          case "/":
            result.value = div(
              parseFloat(firstOperand),
              parseFloat(result.value)
            );
            break;
        }
        break;
      case "C":
        result.value = "0";
        break;
      default:
        firstOperand = result.value;
        operation = funcPressed;
        console.log(firstOperand);
        result.value = "0";
    }
  };
  const numBtns = document.querySelectorAll(".numericBtn");
  numBtns.forEach((btn) => {
    btn.addEventListener("click", numBtnClicked);
  });
  const funcBtns = document.querySelectorAll(".functionBtn");
  funcBtns.forEach((funcBtn) => {
    funcBtn.addEventListener("click", funcBtnClicked);
  });
});
