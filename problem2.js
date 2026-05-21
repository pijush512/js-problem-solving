//! Create a function that determines whether a given integer is even or odd.

function evenOrOdd (number) {
  if(number % 2 === 0){
    return `${number} is Even Number`;
  }
  else {
    return `${number} is Odd Number`;
  }
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(5));