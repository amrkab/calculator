function add(firstNumber, secondNumber){
    displayValue = +firstNumber + +secondNumber;
    displayValue = parseFloat(displayValue.toFixed(7));
    displayContent.textContent = displayValue;
}

function subtract(firstNumber, secondNumber){
    displayValue = +firstNumber - +secondNumber;
    displayValue = parseFloat(displayValue.toFixed(7));
    displayContent.textContent = displayValue;
}

function multiply(firstNumber, secondNumber){
    displayValue = +firstNumber * +secondNumber;
    displayValue = parseFloat(displayValue.toFixed(7));
    displayContent.textContent = displayValue;
}

function divide(firstNumber, secondNumber){
    displayValue = +firstNumber / +secondNumber;
    displayValue = parseFloat(displayValue.toFixed(7));
    displayContent.textContent = displayValue;
}

function operate(firstOperand, secondOperand, currentOperator) {
    switch(currentOperator) {
        case '+':
        add(firstOperand, secondOperand);
        break;
        case '-':
        subtract(firstOperand, secondOperand);
        break;
        case '*':
        multiply(firstOperand, secondOperand);
        break;
        case '/':
        divide(firstOperand, secondOperand);
        break;
    }
};

let displayValue = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

let displayContent = document.querySelector('#display');

const numbersBtn = document.querySelectorAll('.numbers');
const operatorsBtn = document.querySelectorAll('.operators');

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const clearBtn = document.querySelector('#clear');

const equalBtn = document.querySelector('#equal');

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.key}']`);
    key.click();
});

// listens to any click on a number and displays the numbers pressed
numbersBtn.forEach( number => {
    number.addEventListener('click', () => {
        if (firstOperand && secondOperand) {
            hardClear();
            let currentNumber = number.textContent;
            display(currentNumber);
        } else {
            let currentNumber = number.textContent;
            display(currentNumber);
        }
        
    });
});




// every time a number is pressed, it gets concatenated and assigned to the variable displayValue
function display(currentNumber) {
    let decimalCount;

    if (displayValue.includes('.')) {
        // If it contains a dot, count the occurrences
        decimalCount = displayValue.split('.').length - 1;
    }

    if (currentNumber == '.' && decimalCount > 0) {
        return;
    } else {
        // Check if the total characters would exceed 10 after concatenating
        if ((displayValue + currentNumber).length > 10) {
            return;
        }

        if (displayValue=='' && currentNumber=='.'){
            displayValue += '0' + currentNumber;
            displayContent.textContent = displayValue;
        } else {
            displayValue += currentNumber;
            displayContent.textContent = displayValue;
        }
        
    }
}

// four event handlers that listen to the '+' '-' '*' '/' buttons, 
// if the input is not empty it assigns the displayValue to firstOperand and then executes clearDisplay()
// sets variable currentOperator to its corresponding operator
addBtn.addEventListener('click', () => {
    addBtn.classList.add('selected');

    if (displayValue && !firstOperand) {
    currentOperator = '+';
    displayContent.textContent = displayValue;
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '+';
        displayContent.textContent = displayValue;
    } else if (displayValue && firstOperand && secondOperand){
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '+';
        displayContent.textContent = displayValue;
    } else {
        alert('ERROR')
    }
    clearDisplay();
});

subtractBtn.addEventListener('click', () => {
    subtractBtn.classList.add('selected');

    if (displayValue && !firstOperand) {
    currentOperator = '-';
    displayContent.textContent = displayValue;
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '-';
        displayContent.textContent = displayValue;
    } else if (displayValue && firstOperand && secondOperand){
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '-';
        displayContent.textContent = displayValue;
    } else {
        alert('ERROR')
    }
    clearDisplay();
});

multiplyBtn.addEventListener('click', () => {
    multiplyBtn.classList.add('selected');

    if (displayValue && !firstOperand) {
    currentOperator = '*';
    displayContent.textContent = displayValue;
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '*';
        displayContent.textContent = displayValue;
    } else if (displayValue && firstOperand && secondOperand){
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '*';
        displayContent.textContent = displayValue;
    } else {
        alert('ERROR')
    }
    clearDisplay();
});

divideBtn.addEventListener('click', () => {
    divideBtn.classList.add('selected');

    if (displayValue && !firstOperand) {
    currentOperator = '/';
    displayContent.textContent = displayValue;
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '/';
        displayContent.textContent = displayValue;
    } else if (displayValue && firstOperand && secondOperand){
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '/';
        displayContent.textContent = displayValue;
    } else {
        alert('ERROR')
    }
    clearDisplay();
});


//--------------------------------------------------------------------------------------------------------------


// event handler that listens to the '=' button and executes equate()
equalBtn.addEventListener('click', () => {
    equalBtn.classList.add('selected');
    equate();
});

clearBtn.addEventListener('click', () => {
    hardClear();
});

//sets the current displayValue to empty string
function clearDisplay() {
    displayValue = '';
};

// resets every piece of data
function hardClear() {
    displayValue = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    displayContent.textContent = '0';
}

// since displayValue was set to empty string after an operator is pressed,
// the value of displayValue now would be equal to the second number
// assigns displayValue to secondOperand
// executes operate()
function equate(){
    if ((!firstOperand && !secondOperand) || !displayValue) {
        alert('ERROR')
    } else {
        secondOperand = displayValue;
        if (secondOperand == '0') {
            displayContent.textContent = "no";
        } else {
            operate(firstOperand, secondOperand, currentOperator);
        }
        
    }
    
};
