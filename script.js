function convertTemperature() {
    const inputTempValue = document.getElementById('inputTemp').value;
    const inputScale = document.getElementById('inputScale').value;
    const outputScale = document.getElementById('outputScale').value;

    if (isNaN(inputTempValue) || inputTempValue === "") {
        document.getElementById('output').textContent = "Please enter a valid number!";
        return;
    }

    const inputTemp = parseFloat(inputTempValue);
    let intermediateCelsius = 0;

    switch (inputScale) {
        case "C":
            intermediateCelsius = inputTemp;
            break;
        case "F":
            intermediateCelsius = (inputTemp - 32) * 5/9;
            break;
        case "K":
            intermediateCelsius = inputTemp - 273.15;
            break;
    }

    let outputTemp = 0;
    switch (outputScale) {
        case "C":
            outputTemp = intermediateCelsius;
            break;
        case "F":
            outputTemp = (intermediateCelsius * 9/5) + 32;
            break;
        case "K":
            outputTemp = intermediateCelsius + 273.15;
            break;
    }

    let outputElement = document.getElementById('output');
    outputElement.textContent = `${inputTempValue}${inputScale} is equal to ${outputTemp.toFixed(2)}${outputScale}`;
    setTimeout(() => {
        outputElement.style.opacity = '1';
    }, 100);

    updateBackgroundColorAndSVG(outputTemp, outputScale);
}

function updateBackgroundColorAndSVG(temp, scale) {
    let celsiusTemp = temp;

    if (scale === "F") {
        celsiusTemp = (temp - 32) * 5/9;
    } else if (scale === "K") {
        celsiusTemp = temp - 273.15;
    }

    document.body.classList.add("animated");

    let svgContainer = document.querySelector('.svg-container');
    svgContainer.innerHTML = ''; // Clear previous SVG

    if (celsiusTemp < -20) {
        document.body.style.background = "linear-gradient(to right, #1E3D59, #29577B)";
        svgContainer.innerHTML = '<svg>...Cold SVG...</svg>';  // Replace with real SVG data
    } else if (celsiusTemp >= -20 && celsiusTemp < -10) {
        document.body.style.background = "linear-gradient(to right, #20639B, #3A7CAC)";
        svgContainer.innerHTML = '<svg>...Chilly SVG...</svg>';  // Replace with real SVG data
    } else if (celsiusTemp >= -10 && celsiusTemp < 0) {
        document.body.style.background = "linear-gradient(to right, #3CAEA3, #57BFC1)";
        svgContainer.innerHTML = '<svg>...Cool SVG...</svg>';  // Replace with real SVG data
    } else if (celsiusTemp >= 0 && celsiusTemp < 10) {
        document.body.style.background = "linear-gradient(to right, #F6D55C, #F6E27E)";
        svgContainer.innerHTML = '<svg>...Warm SVG...</svg>';  // Replace with real SVG data
    } else if (celsiusTemp >= 10 && celsiusTemp < 20) {
        document.body.style.background = "linear-gradient(to right, #ED553B, #EF7464)";
        svgContainer.innerHTML = '<svg>...Hot SVG...</svg>';  // Replace with real SVG data
    } else {
        document.body.style.background = "linear-gradient(to right, #6A0572, #84378B)";
        svgContainer.innerHTML = '<svg>...Very Hot SVG...</svg>';  // Replace with real SVG data
    }

    // GSAP animations
    gsap.from(".svg-container svg", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: "bounce.out"
    });
}
