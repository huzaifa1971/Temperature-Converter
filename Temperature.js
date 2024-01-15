const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert");
const resultDiv = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let result;
  if (unit === "celsius") {
    result = convertToCelsius(temperature);
  } else if (unit === "fahrenheit") {
    result = convertToFahrenheit(temperature);
  } else if (unit === "kelvin") {
    result = convertToKelvin(temperature);
  }

  resultDiv.textContent = `Converted Temperature: ${result} ${unit}`;
});

function convertToCelsius(temperature) {
  return (((temperature - 32) * 5) / 9).toFixed(2);
}

function convertToFahrenheit(temperature) {
  return ((temperature * 9) / 5 + 32).toFixed(2);
}

function convertToKelvin(temperature) {
  return (temperature + 273.15).toFixed(2);
}
