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
    num2 = parseFloat(displayValue);
    updatescreen();
}

function clear() {
    displayValue = '0';
    num2 = 0;
    num1 = null;
    updatescreen();
}

function operators(op) {
    if (num1 == null) {
        if (op == '=') return;
        num1 = num2
        operator = op;
        displayValue = '0';
        updatescreen(true);
    } else {
        displayValue = operate(num1, operator, num2);
        updatescreen(true);
        num2 = displayValue;
        displayValue = '0';
        num1 = null;
        if (op != '=') operator = op;
    }
}

function updatescreen(operated = false) {
    if (displayValue.length > 10) {
        displayValue = displayValue.slice(0, 10);
    }

    if (operated) {
        displayValue = (Math.round(displayValue * 100) / 100).toString();
    }
    screen.textContent = displayValue;
}

function decimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updatescreen();
    }
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('number')) {
        numbers(target.textContent);
    } else if (target.parentNode.classList.contains('operators')) {
        operators(target.textContent);
    } else if (target.id == 'AC') {
        clear();
    } else if (target.id == 'decimal') {
        decimal();
    }
});

let num1 = null;
let operator;
let num2;

let displayValue = '0';

const screen = document.querySelector('.screen');
