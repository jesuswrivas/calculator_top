//FUNCTIONS

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator === "add") {
        return add(a, b)
    } else if (operator === "subtract") {
        return subtract(a, b)
    } else if (operator === "multiply") {
        return multiply(a, b)
    } else if (operator === "divide") {
        return divide(a, b)
    }

}


let allButtonNumber = document.querySelectorAll(".calculator__buttons__number")
let allButtonOperation = document.querySelectorAll(".calculator__buttons__operation")
let display = document.querySelector(".calculator__display__numbers")
let displayOperation = { number1: 0, operation: undefined, number2: 0 }


for (let buttonNumber of allButtonNumber) {
    buttonNumber.addEventListener("click", (e) => {
        display.innerText += `${e.target.innerText}`
    })
}

for (let buttonOperation of allButtonOperation) {
    buttonOperation.addEventListener("click", (e) => {
        displayOperation.number1 = display.innerText
        displayOperation.operation = e.target.innerText
        display.innerText = "0"
    })
}

let resultButton = document.querySelector(".calculator__buttons__result")
resultButton.addEventListener("click", (e) => {
    displayOperation.number2 = display.innerText
})



