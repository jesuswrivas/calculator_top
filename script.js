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
let displaySmall = document.querySelector(".calculator__display__operations")
let displayOperation = []
let operationTransform = { "+": "add", "-": "subtract", "x": "multiply", "/": "divide" }



//Populating the big display
for (let buttonNumber of allButtonNumber) {
    buttonNumber.addEventListener("click", (e) => {
        if (display.innerText === "0") {
            display.innerText = `${e.target.innerText}`

        } else {
            display.innerText += `${e.target.innerText}`

        }
    })
}

//Populating the small display
for (let buttonNumber of allButtonNumber) {
    buttonNumber.addEventListener("click", (e) => {
        if (displaySmall.innerText === "0") {
            displaySmall.innerText = `${e.target.innerText}`

        } else {
            displaySmall.innerText += `${e.target.innerText}`

        }
    })
}

//Populatin the big display
for (let buttonOperation of allButtonOperation) {
    buttonOperation.addEventListener("click", (e) => {
        displayOperation.push(`${display.innerText}`)
        displayOperation.push(`${e.target.innerText}`)
        display.innerText = "0"
    })
}

//Populating the small display

for (let buttonOperation of allButtonOperation) {
    buttonOperation.addEventListener("click", (e) => {
        displaySmall.innerText += `${e.target.innerText}`
    })
}





let resultButton = document.querySelector(".calculator__buttons__result")
resultButton.addEventListener("click", (e) => {
    let currentResult = 0
    displayOperation.push(`${display.innerText}`)
    while (displayOperation.length > 2) {
        currentResult = operate(operationTransform[displayOperation[1]], +displayOperation[0], +displayOperation[2])
        displayOperation.splice(0, 3)
        displayOperation.unshift(currentResult)
    }
    display.innerText = displayOperation[0]
    displaySmall.innerText = displayOperation[0]
    displayOperation = []
})

//Delete button
let deleteButton = document.querySelector(".calculator__buttons__c")
deleteButton.addEventListener("click", (e => {
    display.innerText = display.innerText.slice(0, -1)
    displaySmall.innerText = displaySmall.innerText.slice(0, -1)

}))



//Delete all button
let deleteAllButton = document.querySelector(".calculator__buttons__ac")
deleteAllButton.addEventListener("click", (e => {
    display.innerText = 0
    displaySmall.innerText = 0
    displayOperation = []

}))



