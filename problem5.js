// ! Create a function that takes a score (0-100) and returns the corresponding letter  (A, B, C, D, or F).

function gradeCalculator (score) {
  if(score >= 80){
    return `A Total Score is ${score}`;
  }
  else if(score >= 65){
    return `B Total Score is ${score}`;
  }
  else if(score >= 55){
    return `C Total Score is ${score}`;
  }
  else if(score >= 40){
    return `D Total Score is ${score}`;
  }
  else {
    return `F Total Score is ${score}`;
  }
};

console.log(gradeCalculator(90));
console.log(gradeCalculator(70));
console.log(gradeCalculator(59));
console.log(gradeCalculator(45));
console.log(gradeCalculator(40));
console.log(gradeCalculator(39));