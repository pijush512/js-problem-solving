// Create a function that filters out a given array and returns a new array containing only the positive numbers. 

function positiveNumvers (arr) {

  let positive = [];

  for(i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      positive.push(arr[i]);
    }
  }
  return positive;
}

const result = positiveNumvers ([-1, -2, -3, 4, 5, 0, 6, 7, 8, 9, 10, 0.5, -0.5]);
console.log(result);