let firstNum= '';
let secondNum= '';
let operator='';

let switchForOperand = true;
let clickOperator = true;
let clearDisplay = false; 

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

//Create div with numbers

for (let i=0; i<10; i++){
    let numberButton = document.createElement('div');
    numberButton.setAttribute('id', 'numberButton')
    numberButton.textContent = i;
    numberButton.addEventListener('click', () => handleNumber(i))
    numberContainer.appendChild(numberButton);
}

//Functions for operators

function handleNumber(digit){
    if (clearDisplay){
            display.textContent = '';
            clearDisplay = false;
    }
    display.textContent += digit;
    if (switchForOperand){
        firstNum += digit
    } else {
        secondNum += digit
    }
    clickOperator = true;
};

function universalOperator(digitOperator){
    if (clickOperator){
        if (secondNum){
            display.textContent += digitOperator
            firstNum = Number(firstNum)
            secondNum = Number(secondNum)
            firstNum = operate(firstNum, operator, secondNum)
            operator = digitOperator;
            secondNum =''
            clickOperator = false;
        } else {
            display.textContent += digitOperator
            operator = digitOperator
            clickOperator = false;
            switchForOperand = false;
        }
    } else {
        alert('NO its PATRICK. Click number')
    }
}

//Operators

let addButt = document.querySelector('.addButt')
addButt.addEventListener('click', ()=>{
    universalOperator('+')
}); 

let subtractButt = document.querySelector('.subtractButt')
subtractButt.addEventListener('click', ()=>{
    universalOperator('-')
}); 

let multiplyButt= document.querySelector('.multiplyButt')
multiplyButt.addEventListener('click', ()=>{
    universalOperator('*')
}); 
let divideButt = document.querySelector('.divideButt')
divideButt.addEventListener('click', ()=>{
    universalOperator('/')
}); 

let powerButt = document.querySelector('.powerButt')
powerButt.addEventListener('click', ()=>{
    universalOperator('**')
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
    clearDisplay = true;
});

let cAc = document.querySelector('.cButt')
cAc.addEventListener('click', ()=>{
    switchForOperand = true;
    firstNum = '';
    secondNum = '';
    operator = '';
    display.textContent = '';
});