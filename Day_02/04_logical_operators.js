// Day_02: Operators

/* ----- Logical Operators ----- */

const num1 = 5;
const num2 = 10;
const num3 = 25;

// Task-11: use the "&&" operator to combine two conditions
console.log(num1 < num2 && num2 < num3); // output:- true
console.log(num1 > num2 && num2 > num3); // output:- false
console.log(num1 < num2 && num2 > num3); // output:- false

// Task-12: use the "||" operator to combine two conditions
console.log(num1 < num2 || num2 < num3); // output:- true
console.log(num1 > num2 || num2 > num3); // output:- false
console.log(num1 < num2 || num2 > num3); // output:- true

// Task-13: use the "!" operator to negate a condition
console.log(!(num1 < num2 || num2 < num3)); // output:- false
console.log(!(num1 > num2 || num2 > num3)); // output:- true

const isRaining = true;
console.log(!isRaining); // output:- false
