console.log("calculator")

    const buttons = document.querySelector('.buttons')
    const screen = document.querySelector('#screen')
    const operator = document.querySelector('.operator')
    let textScreen = ""

    buttons.addEventListener("click", event=>{
        event.preventDefault()
        const calculator = event.target.textContent
        
        textScreen += calculator
    
        if(textScreen === operator){
            console.log('opperator')
        }
        calculator += screen

    })