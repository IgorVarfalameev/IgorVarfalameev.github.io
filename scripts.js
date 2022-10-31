const calcWindow = document.getElementById('calcWindow');

const operatorWindow = document.getElementById('operatorWindow');

const calcObject = {
    num1: '',
    num2: '',
    operator: '',
}
const deleteNum = () =>{
    if (!calcObject.operator) {
        alert(calcObject.num1.length-1)
    }
}

const setOperator = (op) => {
    calcObject.operator = op;
    operatorWindow.textContent = calcObject.operator;
}

const setNum = (num) => {
    if (!calcObject.operator) {
        calcObject.num1 += num;
        calcWindow.textContent = calcObject.num1;
    } else {
        calcObject.num2 += num;
        calcWindow.textContent = calcObject.num2;
    }
}


const reset = () => {
    calcObject.num1 = '';
    calcObject.num2 = '';
    calcObject.operator = null;
    operatorWindow.textContent = '';
    calcWindow.textContent = '';
}

const calc = (num1, num2) => {
    switch (calcObject.operator) {
        case '+':
            calcObject.num1 = num1 + num2;
            calcWindow.textContent = calcObject.num1;
            calcObject.num2 = '';
            break;
        case '-':
            calcObject.num1 = num1 - num2;
            calcWindow.textContent = calcObject.num1;
            calcObject.num2 = '';
            break;
        case '*':
            calcObject.num1 = num1 * num2;
            calcWindow.textContent = calcObject.num1;
            calcObject.num2 = '';
            break;
        case '/':
            calcObject.num1 = num1 / num2;
            calcWindow.textContent = calcObject.num1;
            calcObject.num2 = '';
            break;
        case '**':
            calcObject.num1 = num1 ** num2;
            calcWindow.textContent = calcObject.num1;
            calcObject.num2 = '';
            break;
    }
}