let firstNum= '';
let secondNum= '';
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
let numberContainer = document.querySelector('.numberButtons')

function handleNumber(digit){
    display.textContent += digit;
    if (switchForOperand){
        firstNum += digit
    } else {
        secondNum += digit
    }
    clickOperator = true;
};

for (let i=0; i<10; i++){
    let numberButton = document.createElement('div');
    numberButton.setAttribute('id', 'numberButton')
    numberButton.textContent = i;
    numberButton.addEventListener('click', () => handleNumber(i))
    numberContainer.appendChild(numberButton);
}

let addButt = document.querySelector('.addButt')
addButt.addEventListener('click', ()=>{
    if (clickOperator){
        display.textContent += '+'
        operator = '+'
        clickOperator = false;
        if (switchForOperand){
            switchForOperand = false;
        } else{
            let operatedNum = operate(firstNum, operator, secondNum);
            firstNum = operatedNum;
            secondNum = 0;
        }
    } else {
        alert('NO its PATRICK. Click number')
    }
}); 

let result = document.querySelector('.equalsButt')
result.addEventListener('click', () =>{
    firstNum = Number(firstNum)
    secondNum = Number(secondNum)
    let answer = operate(firstNum, operator, secondNum)
    display.textContent = answer;
    firstNum = '';
    operator = '';
    secondNum = '';
    switchForOperand = true;
});

let cAc = document.querySelector('.cButt')
cAc.addEventListener('click', ()=>{
    switchForOperand = true;
    firstNum = '';
    secondNum = '';
    operator = '';
    display.textContent = '';
});