const digitElement = document.querySelector('.digit');
let currentValue = 0.00;

function incrementDigit() {
    currentValue += 50;
    digitElement.textContent = currentValue.toLocaleString();
    if (currentValue < 10000) {
        digitElement.style.left = '28%';
    }
    else if (currentValue < 100000) {
        digitElement.style.left = '31%';
    } else {
        digitElement.style.left = '33%';
    }
}

setInterval(incrementDigit, 5);