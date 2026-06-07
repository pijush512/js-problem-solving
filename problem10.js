// !!  Create a function that takes an integer (e.g., 1234) and returns the total count of its digits.

function countDigits (number) {
  let numString = number.toString();
  let result = numString.length;

  return `${number} total digits is ${result}`;
};

console.log(countDigits (100));