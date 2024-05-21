//Calculator function to add, subtract, multiply and divide numbers

// Get the display element
const display = document.getElementById('result');

// Get all the number buttons
function addToDisplay(input) {
    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.value = ''; 
}

// Calculate the result
function calculate() {
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}