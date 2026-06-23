// Find the Maximum in an Array: Write a function that accepts an array of numbers and returns the highest value.

function findMaxValue (arr) {
  if(arr.length === 0) {
    return undefined;
  }
  let max = arr[0];

  for(const num of arr) {
    if(num > max) {
      max = num;
    }
  }

  return max;
  
}

console.log(findMaxValue ([1, 5, 3, 9, 2]));
