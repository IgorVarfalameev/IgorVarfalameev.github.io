const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const rezult = document.getElementById("rezult");

let operator;

const setOperator = (op) => {
    operator = op;
}

calc = (num1, num2) => {
    switch (operator) {
        case 'plus':
            rezult.textContent = num1 + num2;
            break;
        case 'minus':
            rezult.textContent = num1 - num2;
            break;
        case 'mult':
            rezult.textContent = num1 * num2;
            break;
        case 'division':
            rezult.textContent = num1 / num2;
            break;
    }
}