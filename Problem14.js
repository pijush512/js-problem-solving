// Write a function to find the average of all the numbers in a given array.

function averageOfArry (arr) {
  let average = 0;
  for(let i = 0; i < arr.length; i++) {
    average = average + arr[i];
  }
  return average;
};

console.log(averageOfArry ([1, 2, 3, 4, 5]));