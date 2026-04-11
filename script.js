let firstNum=0;
let secondNum=0;
let operator='';

let switchForOperand = true;
let clickOperator = true;

const add = (a,b) =>  a+b
const subtract = (a,b) =>  a-b
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b
const power = (a,b) => a**b;

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
        case '/':
            result = divide(firstNum, secondNum)
        break;
        case '**':
            result = power(firstNum, secondNum)
        break;
        default:
            alert('Error')
        break;
    }
    return result
}

let container = document.querySelector('.container')
let display = document.querySelector('.display')
let numButton1 = document.querySelector('.Butt1')

numButton1.addEventListener('click', ()=>{
    display.textContent += 1
    if (switchForOperand){
        firstNum += 1
    } else {
        secondNum +=1
    }
    clickOperator = true
});

let addButt = document.querySelector('.addButt')
addButt.addEventListener('click', ()=>{
    if (clickOperator){
        display.textContent += '+'
        operator = '+'
        clickOperator = false
    } else {
        alert('NO its PATRICK. Click number')
    }
}); 

let result = document.querySelector('.equalsButt')
result.addEventListener('click', () =>{
    +firstNum;
    +secondNum;
    display.textContent = operate(firstNum, operator, secondNum)
    operator = ''
})