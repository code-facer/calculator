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

let num1;
let operator;
let num2;

let displayValue = 0;

const screen = document.querySelector('.screen');

function updatescreen() {
    screen.textContent = displayValue;
}

const number = document.querySelectorAll('.number');
number.forEach((button) => {
    button.addEventListener('click', () => {
        if(displayValue == 0) {
            displayValue = button.textContent;
            num2 = button.textContent;
        } else {
            displayValue += button.textContent;
            num2 = num2*10 + button.textContent;
        }
        updatescreen();
    })
});     