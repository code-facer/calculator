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
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function numbers (num) {
    if(displayValue == 0) {
        displayValue = num;
    } else {
        displayValue += num;
    }
    num2 = parseInt(displayValue);
    updatescreen();
}

function clear() {
    displayValue = 0;
    num2 = 0;
    num1 = null;
    updatescreen();
}

function operators(op) {
    if (num1 == null) {
        if (op == '=') return;
        num1 = num2
        operator = op;
        displayValue = 0;
        updatescreen();
    } else {
        displayValue = operate(num1, operator, num2);
        updatescreen();
        num2 = displayValue;
        displayValue = 0;
        num1 = null;
        if (op != '=') operator = op;
    }
}

function updatescreen() {
    // round to 2 decimal places
    displayValue = Math.round(displayValue * 100) / 100;
    screen.textContent = displayValue;
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('number')) {
        numbers(target.textContent);
    } else if (target.parentNode.classList.contains('operators')) {
        operators(target.textContent);
    }
});

const ac = document.querySelector('#AC');
ac.addEventListener('click', () => {
    clear();
});

let num1 = null;
let operator;
let num2;

let displayValue = 0;

const screen = document.querySelector('.screen');
