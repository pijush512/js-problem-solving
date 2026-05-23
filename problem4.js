//  !Write a function that takes three numbers as arguments and returns the largest one.

function largestNumber (num1, num2, num3) {
  if(num1 > num2 && num1 > num3){
    return `${num1} is Largest Number`;
  }
  else if(num2 > num1 && num2 > num3) {
    return `${num2} is Largest Number`;
  }
  else {
    return `${num3} is Largest Number`;
  }
};

console.log(largestNumber(10, 20,30));
console.log(largestNumber(5, 50,30));
console.log(largestNumber(100, 80,90));