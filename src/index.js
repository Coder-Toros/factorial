'use strict';

function countFactorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * countFactorial(num - 1);
}

console.log(countFactorial(5));
console.log(countFactorial(1));