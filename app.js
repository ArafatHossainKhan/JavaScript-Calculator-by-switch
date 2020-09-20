var plusBtn = document.getElementById('plusBtn');
plusBtn.onclick = function () {
    var operator = document.getElementById('operator').value = '+';
}
var equalBtn = document.getElementById('equalBtn');
equalBtn.onclick = function () {
    var operator = document.getElementById('operator').value;
    document.getElementById('result').value = myCalculator(operator)
}
var minusBtn = document.getElementById('minusBtn');
minusBtn.onclick = function () {
    var operator = document.getElementById('operator').value = '-';
}
var mulBtn = document.getElementById('mulBtn');
mulBtn.onclick = function () {
    var operator = document.getElementById('operator').value = '*'
}
var divBtn = document.getElementById('divBtn');
divBtn.onclick = function () {
    var operator = document.getElementById('operator').value = '/';
}
var clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = function() {
    document.getElementById('firstNumber').value = ' ';
    document.getElementById('secondNumber').value = ' ';
    document.getElementById('operator').value = ' ';
    document.getElementById('result').value = ' ';
}
function myCalculator (operator) {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var operator = document.getElementById('operator').value;
    switch (operator){
        case "+" :       
            var result = firstNumber+secondNumber;
            break;
        case "-" :
            var result = firstNumber-secondNumber;
            break
        case "*" :
            var result = firstNumber*secondNumber;
            break;
        case "/" :
            var result = firstNumber/secondNumber;
            break;
    }
    return result;
}






