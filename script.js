"use strict";

const resultInput = document.getElementById("result");
const expression = document.querySelector(".expression");
const submitButton = document.getElementById("submit");
const submitButtonReset = document.querySelector(".reset");
const numbers = document.querySelectorAll(".calculator__number");
const operators = document.querySelectorAll(".calculator__operators__button");
const comma = document.querySelector(".comma");

let num1 = "",
  num2 = "",
  curOperator;

let results;

const symbols = {
  "+": "plus",
  "-": "minus",
  "*": "mult",
  "/": "division",
  "^": "power",
};

const sum = (a, b) => {
  return Number(a) + Number(b);
};

const minus = (a, b) => {
  return Number(a) - Number(b);
};

const mult = (a, b) => {
  return Number(a) * Number(b);
};

const division = (a, b) => {
  return Number(a) / Number(b);
};

const power = (a, b) => {
  return Number(a) ** Number(b);
};

const root = (a) => {
  return Math.sqrt(Number(a));
};

Array.from(numbers).forEach((item) =>
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const value = event.currentTarget.innerHTML;
    if (curOperator && curOperator !== "root") {
      num2 += value;
      expression.innerHTML += value;
    } else {
      num1 += value;
      expression.innerHTML += value;
    }
  })
);

Array.from(operators).forEach((item) =>
  item.addEventListener("click", (event) => {
    event.preventDefault();
    curOperator = event.currentTarget.id;
    if (curOperator === "root") {
      expression.innerHTML = "";
      num1 = "";
    }
    expression.innerHTML += event.currentTarget.innerHTML;
  })
);

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (curOperator !== "root" && !num2) return;
  let result;
  switch (curOperator) {
    case "plus":
      result = sum(num1, num2);
      break;
    case "minus":
      result = minus(num1, num2);
      break;
    case "mult":
      result = mult(num1, num2);
      break;
    case "division":
      result = division(num1, num2);
      break;
    case "power":
      result = power(num1, num2);
      break;
    case "root":
      result = root(num1, num2);
      break;
  }
  expression.innerHTML = result;
});

comma.addEventListener("click", (event) => {
  event.preventDefault();
  if (curOperator) {
    if (!num2.includes(".")) {
      num2 += ".";
      expression.innerHTML += ".";
    }
  } else {
    if (!num1.includes(".")) {
      num1 += ".";
      expression.innerHTML += ".";
    }
  }
});
