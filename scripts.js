const calcWindow = document.getElementById('calcWindow');

const operatorWindow = document.getElementById('operatorWindow');

const calcObject = {
    num1: '',
    num2: '',
    operator: '',
}
const deleteNum = () =>{
    if (!calcObject.operator) {
        calcObject.num1 = calcObject.num1.slice(0, -1)
        calcWindow.textContent = calcObject.num1;
    } else {
        calcObject.num2 = calcObject.num2.slice(0, -1)
        calcWindow.textContent = calcObject.num2;
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
const completionCalc = () => {
    calcWindow.textContent = calcObject.num1;
    calcObject.num2 = '';
    calcObject.operator = null;
    operatorWindow.textContent = '';
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
            completionCalc()
            break;
        case '-':
            calcObject.num1 = num1 - num2;
            completionCalc()
            break;
        case '*':
            calcObject.num1 = num1 * num2;
            completionCalc()
            break;
        case '/':
            calcObject.num1 = num1 / num2;
            completionCalc()
            break;
        case '**':
            calcObject.num1 = num1 ** num2;
            completionCalc()
            break;
    }
}