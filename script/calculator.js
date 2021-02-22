const showValue = (event) => {
    const val = event.target.value;
    document.getElementById('output').innerHTML = val;
}


const letDoMath = (mathStr) => {
    const values = mathStr.split(/[-+*/=]/g);
    const operator = mathStr.match(/[-+*/=]/g).join('');
    let result = 0;

    console.log(values, parseFloat(values[0]), parseFloat(values[1]));
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

const checkDecimal = (mathStr) => {
    let resultStr = '';

    if (!mathStr || mathStr.charAt(mathStr.length - 1).match(/[^0-9]/g)) {
        resultStr += '0.';
        console.log(resultStr);
    };

    return resultStr;
}

const getInput = (event) => { 
    event.preventDefault();
    
    let inputVal = event.target.value;
    let str = document.getElementById('output2').innerHTML;

    if (str.match(/[-+*/=]/g) && inputVal.match(/[-+*/=]/g)) {
        const result = letDoMath(str);
        document.getElementById('output2').innerHTML = `${result}`;
    } else {
        if (inputVal === ".") {
            inputVal = checkDecimal(str);
        };

        document.getElementById('output2').innerHTML += inputVal; 
    }    

    console.log(document.getElementById('output2').innerHTML)
}

const calculator = document.getElementById('calculator');

calculator.addEventListener('click', getInput);
