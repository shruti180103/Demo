let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function square() {
    try {
        display.value = eval(display.value) ** 2;
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function percentage() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}
//hi