//Write a function that takes a temperature in Celsius and converts it to Fahrenheit.

function CelsiusToFahrenheit (celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
}

console.log(CelsiusToFahrenheit(20));