
function clearScreen() {
    let screenValue = document.getElementById('s').value;
    while (screenValue.length > 0) {
        screenValue = screenValue.substring(1);
    }
    document.getElementById('s').value = screenValue;
}

function backspace() {
    let screenValue = document.getElementById('s').value;
    if (screenValue.length > 0) {
        screenValue = screenValue.substring(0, screenValue.length - 1);
    }
    document.getElementById('s').value = screenValue;
}

function appendCharacter(c) {
    let screenValue = document.getElementById('s').value;
    document.getElementById('s').value = screenValue + c;
}

function calculateResult() { 
    let screenValue = document.getElementById('s').value;
    try {
        let evaluatedResult = eval(screenValue);
        if (evaluatedResult !== undefined) {
            document.getElementById('s').value = evaluatedResult;
        } else {
            document.getElementById('s').value = 'Error';
        }
    } catch (e) {
        document.getElementById('s').value = 'Error';
    }
}
document.querySelectorAll('.calculator-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        let buttonText = this.textContent;
        if (buttonText === 'C') {
            clearScreen();
        } else if (buttonText === '←') {
            backspace();
        } else if (buttonText === '=') {
            calculateResult();
        } else {
            appendCharacter(buttonText);
        }
    });
});





