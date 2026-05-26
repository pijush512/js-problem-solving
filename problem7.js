// !Write a program that prints numbers from 1 to 50. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".

function fizzBuzz (){
for(let i = 1; i <= 50; i ++){
  if(i % 3 === 0 && i % 5 === 0) {
    console.log (`${i} is "FizzBuzz"`);
  }
  else if (i % 3 === 0) {
    console.log  (`${i} is "Fizz"`);
  }
  else if (i % 5 === 0) {
    console.log  (`${i} is "Buzz"`);
  }
  else {
    console.log (i);
  }
}
};

fizzBuzz ();