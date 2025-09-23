
const numbers = document.querySelector(".numbers");
const operations = document.querySelector(".operations");
const field = document.querySelector("#field");
numbers.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName === "BUTTON") {
        field.value = target.textContent;
    }


})

operations.addEventListener("click", (event) => {
    let target = event.target;
    if (target.tagName === "BUTTON") {
        field.value = target.textContent;
    }


})





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

