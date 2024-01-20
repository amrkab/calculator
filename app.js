// let addBtn = document.querySelector('#add');
// let subtractBtn = document.querySelector('#subtract');
// let multiplyBtn = document.querySelector('#multiply');
// let divideBtn = document.querySelector('#divide');

// addBtn.addEventListener('click', () => {
//     let firstNumber = prompt('enter first number');
//     let secondNumber = prompt('enter second number');
//     add(firstNumber, secondNumber);
// });

// subtractBtn.addEventListener('click', () => {
//     let firstNumber = prompt('enter first number');
//     let secondNumber = prompt('enter second number');
//     subtract(firstNumber, secondNumber);
// });

// multiplyBtn.addEventListener('click', () => {
//     let firstNumber = prompt('enter first number');
//     let secondNumber = prompt('enter second number');
//     multiply(firstNumber, secondNumber);
// });

// divideBtn.addEventListener('click', () => {
//     let firstNumber = prompt('enter first number');
//     let secondNumber = prompt('enter second number');
//     divide(firstNumber, secondNumber);
// });

// let operandOne = prompt('enter your first number');
// let operator = prompt('enter your operator +-*/');
// let operandTwo = prompt('enter your second number');

function add(firstNumber, secondNumber){
    console.log(+firstNumber + +secondNumber);
};

function subtract(firstNumber, secondNumber){
    console.log(+firstNumber - +secondNumber);
};

function multiply(firstNumber, secondNumber){
    console.log(+firstNumber * +secondNumber);
};

function divide(firstNumber, secondNumber){
    console.log(+firstNumber / +secondNumber);
};


function operate(operandOne, operandTwo, operator) {
    switch(operator) {
        case '+':
        add(operandOne, operandTwo);
        break;
        case '-':
        subtract(operandOne, operandTwo);
        break;
        case '*':
        multiply(operandOne, operandTwo);
        break;
        case '/':
        divide(operandOne, operandTwo);
        break;
    }
};

// operate(operandOne, operandTwo, operator);