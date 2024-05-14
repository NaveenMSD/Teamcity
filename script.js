let expression = '';

function appendValue(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        document.getElementById('display').value = expression;
    } catch (error) {
        expression = '';
        document.getElementById('display').value = 'Error';
    }
}
