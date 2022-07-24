const { array } = require("prop-types");

//var buttonPlus = document.getElementById('buttonPlus');
//var buttonMinus = document.getElementById('buttonMinus');
//var buttonMultiply = document.getElementById('buttonMultiply');
//var buttonDevide = document.getElementById('buttonDevide');

var operationButtons = document.getElementsByClassName ('operation-button');
// var operationButtons [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input1.value);

    if (operationCode === "+") {
        var result = number1() + number2();
    } else if (operationCode === "-") {
        var result = number1() - number2();
    } (operationCode === "*") {
        var result = number1() * number2();
    } (operationCode === "/") {
        var result = number1() / number2();
    } else {
        window.alert('unknown operation')
    };
    window.alert(result);
}


function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation)
}

var i;
for (i = 0; i < operationButtons.length; i++) {
    var button = operationButtons [i]
    button.addEventListener('click', onOperationButtonClick);
}

addCommonEventListener (i);

