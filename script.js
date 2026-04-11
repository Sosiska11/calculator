const add = (a,b) =>  a+b

const subtract = (a,b) =>  a-b

const multiply = (a, b) => a*b;

const power = (a,b) => a**b;

const factorial = (n) => n == 0 ? 1 : (n != 1) ? n * factorial(n - 1) : 1;



let firstNum;
let secondNum;
let operator;

function operate(firstNum, operator, secondNum){
    let result;
    switch (operator) {
        case '+':
            result = add(firstNum, secondNum)
        break;
        case '-':
            result = subtract(firstNum, secondNum)
        break;
        case '*':
            result = multiply(firstNum, secondNum)
        break;
        case '**':
            result = power(firstNum, secondNum)
        break;
        default:
            alert('enter nums')
        break;
}
}