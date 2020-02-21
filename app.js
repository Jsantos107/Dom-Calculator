console.log("calculator")

const buttons = document.querySelectorAll('.buttons span:not(#equals)')
const screen = document.querySelector('#screen')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')

buttons.forEach(assignEventListener)

equals.addEventListener('click', calculation)

function assignEventListener(button) {
    button.addEventListener("click", addTextToScreen)
}

function calculation() {
    const stringAsArray = screen.textContent.split("")
    const stringToEval = stringAsArray.map(character => {
        if (character === "÷") {
            return "/"
        } else if (character === "x") {
            return "*"
        } else {
            return character
        }
    }).join("")

    screen.textContent = eval(stringToEval)
}


function addTextToScreen(event) {
    const buttonText = event.target.textContent

    screen.textContent += buttonText


}