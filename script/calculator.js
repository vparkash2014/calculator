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
        resultStr += '0.';
    } else {
        resultStr += '.';
    }
 
    return resultStr;
}

// this function will check the history and clear it 
const checkHistory = (historyStr) => {
    console.log(historyStr, historyStr.match(/[-+*/]/g))

    if (historyStr.charAt(historyStr.length - 1).match("=")) {
        document.getElementById('output').innerHTML = "";
        historyStr = "";

    } else if (historyStr.match(/[-+*/]/g)) {
        console.log('passed');
        if (historyStr.match(/[-+*/]/g).length >= 2) {
            console.log(`passed2`, historyStr.split(' '))
            document.getElementById('output').innerHTML = `${historyStr.split(' ')[1]}${historyStr.split(' ')[2]}`;
            historyStr = `${historyStr.split(' ')[1]}${historyStr.split(' ')[2]}`;
        }
    }

    return historyStr;
};

const getInput = (event) => { 
    event.preventDefault();

    if (historyStr) {
        historyStr = checkHistory(historyStr);
    }

    let inputVal = event.target.value;
    let str = document.getElementById('output').innerHTML;

    if (str.match(/[-+*/=]/g) && inputVal.match(/[-+*/=]/g)) {
        const result = letDoMath(str);
        str += `<br /> ${result}`;
        historyStr += `= ${result} ${inputVal}`;
    } else {
        if (inputVal === '.') {
            inputVal = checkDecimal(str) 
        };

        str += inputVal; 
        historyStr += inputVal;
    }    

    document.getElementById('output').innerHTML = str;
}

const calculator = document.getElementById('calculator');
let historyStr = "";

calculator.addEventListener('click', getInput);


