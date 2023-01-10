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
    if (b === 0) {
        return "error"
    } else {
        return a / b
    }
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



//Populating the big display. Push events for button numbers
for (let buttonNumber of allButtonNumber) {
    buttonNumber.addEventListener("click", (e) => {
        if ((display.innerText === "0") || (display.innerText === "what u doin?")) {
            display.innerText = `${e.target.innerText}`
        } else {
            display.innerText += `${e.target.innerText}`

        }
    })
}

//Populating the small display. Push events for button numbers
for (let buttonNumber of allButtonNumber) {
    buttonNumber.addEventListener("click", (e) => {
        if ((displaySmall.innerText === "0") || (displaySmall.innerText === "what u doin?")) {
            displaySmall.innerText = `${e.target.innerText}`

        } else {
            displaySmall.innerText += `${e.target.innerText}`

        }
    })
}

//Populatin the big display. Push events for operation buttons
for (let buttonOperation of allButtonOperation) {
    buttonOperation.addEventListener("click", (e) => {
        displayOperation.push(`${display.innerText}`)
        displayOperation.push(`${e.target.innerText}`)
        display.innerText = "0"
    })
}

//Populating the small display. Push events for operation buttons

for (let buttonOperation of allButtonOperation) {
    buttonOperation.addEventListener("click", (e) => {
        displaySmall.innerText += `${e.target.innerText}`
    })
}


//Result button

let resultButton = document.querySelector(".calculator__buttons__result")
resultButton.addEventListener("click", (e) => {
    let currentResult = 0
    //The result button will push the last number currently on the screen into the displayOperation variable
    displayOperation.push(`${display.innerText}`)
    while (displayOperation.length > 2) {
        currentResult = operate(operationTransform[displayOperation[1]], +displayOperation[0], +displayOperation[2])
        //Error from division by 0
        if (currentResult === "error") {
            break
        } else {
            //This will operate every three elements on the displayOperation array until there is only one left (the result)
            displayOperation.splice(0, 3)
            displayOperation.unshift(currentResult)
        }
    }

    if (currentResult === "error") {
        display.innerText = "what u doin?"
        displaySmall.innerText = "what u doin?"
        displayOperation = []
    } else {
        //if there is no error, the calculator will print the only element frm the displayOperation array (the result)
        display.innerText = displayOperation[0]
        displaySmall.innerText = displayOperation[0]
        displayOperation = []
    }

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



