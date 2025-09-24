
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
const numbers = document.querySelector(".numbers");
const operations = document.querySelector(".operations");
const field = document.querySelector("#field");
numbers.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName === "BUTTON") {
        field.value = target.textContent;
        fieldParser(String(target.textContent));

    }


})

operations.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName === "BUTTON") {
        field.value = target.textContent;
        fieldParser(String(target.textContent));
        if (String(target.textContent) === '=') {
            evaluate();
        }
    }


})

function operate(operator, number1, number2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(number1, number2);
        case '-':
            result = subtract(number1, number2);
        case '*':
            result = multiply(number1, number2);
        case '/':
            result = divide(number1, number2);
    }

    return result;

}

function fieldParser(value) {
    if (firstNumber === 0 && secondNumber === 0 && operator === '') {
        firstNumber = Number(value);
    } else if (firstNumber != 0 && secondNumber === 0 && operator === '') {
        operator = value;
    } else if (firstNumber != 0 && secondNumber === 0 && operator != '') {
        // Check if the new value is an operator (reassign operator)
        if (isNaN(Number(value))) {
            operator = value;  // Reassign the operator
        } else {
            secondNumber = Number(value);  // It's a number
        }
    }
}

function evaluate() {
    if (!firstNumber === 0 && secondNumber === 0 && operator === '') {
        field.value = operate(operator, firstNumber, secondNumber);
    }

}





function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

