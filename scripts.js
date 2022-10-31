const calcWindow = document.getElementById('calcWindow');

const operatorWindow = document.getElementById('operatorWindow');

let operator;

const setOperator = (op) => {
    operator = op;
    operatorWindow.textContent = operator;
}

let num1 = '';
let num2 = '';

const setNum = (num) => {
    if (!operator) {
        num1 += num;
        calcWindow.textContent = num1;
    } else {
        num2 += num;
        calcWindow.textContent = num2;
    }
}

const reset = () => {
    num1 = '';
    num2 = '';
    operator = null;
    operatorWindow.textContent = '';
    calcWindow.textContent = '';
}

const calc = (num1, num2) => {
    switch (operator) {
        case '+':
            calcWindow.textContent = num1 + num2;
            num2 = '';
            break;
        case '-':
            calcWindow.textContent = num1 - num2;
            num2 = '';
            break;
            case '*':
            calcWindow.textContent = num1 * num2;
            num2 = '';
            break;
        case '/':
            calcWindow.textContent = num1 / num2;
            num2 = '';
            break;
    }
}