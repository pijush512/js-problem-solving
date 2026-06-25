// Create a function that returns the total sum of all numerical elements inside an array.

function sumOfArray (arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }

  return sum;
}

const result = sumOfArray ([1,5,4]);
console.log(result);