function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

let num1 = null;
let operator;
let num2;

let displayValue = 0;

const screen = document.querySelector('.screen');

function updatescreen() {
    // round to 2 decimal places
    displayValue = Math.round(displayValue * 100) / 100;
    screen.textContent = displayValue;
}

const number = document.querySelectorAll('.number');
number.forEach((button) => {
    button.addEventListener('click', () => {
        if(displayValue == 0) {
            displayValue = button.textContent;
        } else {
            displayValue += button.textContent;
        }
        num2 = parseInt(displayValue);
        updatescreen();
    })
});

const clear = document.querySelector('#AC');
clear.addEventListener('click', () => {
    displayValue = 0;
    num2 = 0;
    num1 = null;
    updatescreen();
});

const operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', (event) => {
        let target = event.target;
        if (num1 == null) {
            if (target.textContent == '=') return;
            num1 = num2
            operator = target.textContent;
            displayValue = 0;
            updatescreen();
        } else {
            displayValue = operate(num1, operator, num2);
            updatescreen();
            num2 = displayValue;
            displayValue = 0;
            num1 = null;
            if (target.textContent != '=') operator = target.textContent;
        }
    })
});