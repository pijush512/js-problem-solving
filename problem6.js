//! Write a function to calculate the factorial of a given positive integer ($n!$) using a loop.

function factorial (number) {
  let result = 1;
  for(let i = 1; i <= number; i ++){
    result = result * i;
  };

  return `${number}! it's factorial is ${result}`;
  
}

console.log(factorial(5));
console.log(factorial(4));