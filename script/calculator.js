// this function take in a string composed of two numbers and operator and performs that operations
const letDoMath = (mathStr) => {
    const values = mathStr.split(/[-+*/=]/g);
    const operator = mathStr.match(/[-+*/=]/g).join('');
    let result = 0;

    if (operator === '+') {
        result = parseFloat(values[0]) + parseFloat(values[1]);
    } else if (operator === '-') {
        result = parseFloat(values[0]) - parseFloat(values[1]);
    } else if (operator === '*') {
        result = parseFloat(values[0]) * parseFloat(values[1]);
    } else if (operator === '/') {
        result = parseFloat(values[0]) / parseFloat(values[1]);
    }

    return result;
}

// the function check if the user has inputed a decimal without a zero infront of it
const checkDecimal = (mathStr) => {
    let resultStr = '';

    if (!mathStr || mathStr.charAt(mathStr.length - 1).match(/[^0-9]/g)) {
        resultStr += '0.';;
    };

    return resultStr;
}

const getInput = (event) => { 
    event.preventDefault();

    let inputVal = event.target.value;
    let str = document.getElementById('output').innerHTML;

    if (str.match(/[-+*/=]/g) && inputVal.match(/[-+*/=]/g)) {
        const result = letDoMath(str);
        str += `<br /> ${result}`;
        const nextOperator = inputVal;
    } else {
        if (inputVal === ".") {
            inputVal = checkDecimal(str);
        };

        str += inputVal; 
    }    

    document.getElementById('output').innerHTML = str;
}

const calculator = document.getElementById('calculator');


calculator.addEventListener('click', getInput);


