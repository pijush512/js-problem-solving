// !! Create a function that calculates the sum of all numbers from 1 up to a given number $N$.

function calculateSum (n) {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum = sum + i;
  }
  return `1 to ${n} sum is ${sum}`;
}

console.log(calculateSum (5));