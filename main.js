function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputScale = document.getElementById('inputScale').value;

    let output = "";
    if (inputScale === "C") {
        const fahrenheit = (inputTemp * 9/5) + 32;
        output = `${inputTemp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
        updateBackgroundColor(fahrenheit);
    } else {
        const celsius = (inputTemp - 32) * 5/9;
        output = `${inputTemp}°F is equal to ${celsius.toFixed(2)}°C`;
        updateBackgroundColor(celsius);
    }

    document.getElementById('output').textContent = output;
}

function updateBackgroundColor(temp) {
    if (temp < 0) {
        document.body.style.backgroundColor = '#blue';
    } else if (temp >= 0 && temp <= 20) {
        document.body.style.backgroundColor = '#a2d9ff';
    } else if (temp > 20 && temp <= 30) {
        document.body.style.backgroundColor = '#ffde59';
    } else {
        document.body.style.backgroundColor = '#ff6b6b';
    }
}
