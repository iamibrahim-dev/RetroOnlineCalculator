document.addEventListener("DOMContentLoaded", () => {
  const operators = [".", "+", "*", "/", "%", "-", "(", ")", "C", "="];
  let prevClick = "";

  outputField = document.getElementById("output");
  numberPAD = document.getElementById("numberPad");
  operationPAD = document.getElementById("operationPad");

  function isOperator(op) {
    for (let i = 0; i <= 4; i++) {
      if (op == operators[i]) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  //
  for (let i = 9; i >= 0; i--) {
    button = document.createElement("div");
    button.classList.add("button");
    button.setAttribute("id", i);
    button.innerHTML = i;
    numberPAD.appendChild(button);
    button.addEventListener("click", () => {
      prevClick = i;
      outputField.value += i;
    });
  }

  for (let i = 0; i <= 9; i++) {
    button = document.createElement("div");
    button.classList.add("button");
    button.innerHTML = operators[i];
    operationPAD.appendChild(button);
    button.addEventListener("click", () => {
      if (
        (operators[i] == "+" ||
          operators[i] == "-" ||
          operators[i] == "*" ||
          operators[i] == "/" ||
          operators[i] == "%" ||
          operators[i] == "(" ||
          operators[i] == ")" ||
          operators[i] == ".") &&
        !isOperator(prevClick)
      ) {
        outputField.value += operators[i];
        prevClick = operators[i];
      } else if (operators[i] == "C") {
        outputField.value = "";
      } else if (operators[i] == "=") {
        outputField.value = eval(outputField.value);
      }
    });
  }
});
