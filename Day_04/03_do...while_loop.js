// Day_04: Loops

/* ----- Do...While Loop ----- */

// Task-5: print numbers from 1 to 5 using a do...while loop.
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
/*
output:-
1
2
3
4
5
*/

// Task-6: calculate the factorial of a number using a do...while loop.
const num = 4;
let factorial = 1;
let j = num;

do {
  factorial *= j;
  j--;
} while (j > 0);

console.log(`Factorial of number ${num} is ${factorial}`);
// output:- Factorial of number 4 is 24
