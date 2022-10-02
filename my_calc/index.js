const numberInput = document.getElementById('number_input');
let expression = '';


const pressHandler = (num) => {
    expression += num
    numberInput.value = expression
}

const equalHandler = () => {
    numberInput.value = eval(expression);
    expression = '';
}

const clearHandler = () => {
    expression = '';
    numberInput.value = expression;
}