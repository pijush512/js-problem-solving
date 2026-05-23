//!  Write a function to check if a given year is a leap year.

function leapYear (year) {
  if(year % 400 === 0){
   return `${year} is Leap Year`;
  }
  else if (year % 100 === 0){
    return `${year} is Not Leap Year`;
  }
  else if(year % 4 === 0) {
    return `${year} is Leap Year`;
  }
  else{
    return `${year} is Not Leap Year`;
  }
}

console.log(leapYear(2000));
console.log(leapYear(2001));
console.log(leapYear(2003));
console.log(leapYear(2004));