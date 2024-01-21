function add(firstNumber, secondNumber){
    console.log(+firstNumber + +secondNumber);
    displayValue = +firstNumber + +secondNumber;
    displayContent.textContent = displayValue;
};

function subtract(firstNumber, secondNumber){
    console.log(+firstNumber - +secondNumber);
    displayValue = +firstNumber - +secondNumber;
    displayContent.textContent = displayValue;
};

function multiply(firstNumber, secondNumber){
    console.log(+firstNumber * +secondNumber);
    displayValue = +firstNumber * +secondNumber;
    displayContent.textContent = displayValue;
};

function divide(firstNumber, secondNumber){
    console.log(+firstNumber / +secondNumber);
    displayValue = +firstNumber / +secondNumber;
    displayContent.textContent = displayValue;
};


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

let displayContent = document.querySelector('#displaytext');

const numbersBtn = document.querySelectorAll('.numbers');

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const clearBtn = document.querySelector('#clear');

const equalBtn = document.querySelector('#equal');


// listens to any click on a number and displays the numbers pressed
numbersBtn.forEach( number => {
    number.addEventListener('click', () => {
        let currentNumber = number.textContent;
        display(currentNumber);
    });
});

// every time a number is pressed, it gets concatenated and assigned to the variable displayValue
function display(currentNumber) {
    displayValue += currentNumber;
    displayContent.textContent = displayValue;
};

// four event handlers that listen to the '+' '-' '*' '/' buttons, 
// if the input is not empty it assigns the displayValue to firstOperand and then executes clearDisplay()
// sets variable currentOperator to its corresponding operator
addBtn.addEventListener('click', () => {
    
    if (displayValue && !firstOperand) {
    currentOperator = '+';
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '+';
    } else {
        alert('ERROR')
    }
    clearDisplay();
});

subtractBtn.addEventListener('click', () => {
    
    if (displayValue && !firstOperand) {
    currentOperator = '-';
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '-';
    } else {
        alert('ERROR')
    }
    clearDisplay();
});

multiplyBtn.addEventListener('click', () => {
    
    if (displayValue && !firstOperand) {
    currentOperator = '*';
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '*';
    } else {
        alert('ERROR')
    }
    clearDisplay();
});

divideBtn.addEventListener('click', () => {
    
    if (displayValue && !firstOperand) {
    currentOperator = '/';
    firstOperand = displayValue
    } else if (!secondOperand && displayValue) {
        secondOperand = displayValue;
        operate(firstOperand, secondOperand, currentOperator);
        firstOperand = displayValue;
        secondOperand = '';
        currentOperator = '/';
    } else {
        alert('ERROR')
    }
    clearDisplay();
});


//--------------------------------------------------------------------------------------------------------------


// event handler that listens to the '=' button and executes equate()
equalBtn.addEventListener('click', () => {
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
    displayContent.textContent = displayValue;
}

// since displayValue was set to empty string after an operator is pressed,
// the value of displayValue now would be equal to the second number
// assigns displayValue to secondOperand
// executes operate()
function equate(){
    secondOperand = displayValue;
    operate(firstOperand, secondOperand, currentOperator);
};
