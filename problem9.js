// !! Write a function that generates and prints the multiplication table for a given integer.

function multiplicationTable (number) {
  for(let i = 1; i <= 10; i++){
    let result = number * i;
    console.log (`${number} x ${i} = ${result}`);
  }
}

multiplicationTable (2);