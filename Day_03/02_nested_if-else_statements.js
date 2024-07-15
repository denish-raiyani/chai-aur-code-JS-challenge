// Day_03: Control Structures

/* ----- Nested If-Else Statements ----- */

// Task-3: to find largest of three number using nested if-else statements.
const numOne = 11;
const numTwo = 28;
const numThree = 19;

if (numOne >= numTwo) {
  if (numOne >= numThree) {
    console.log(numOne);
  } else {
    console.log(numThree);
  }
} else {
  if (numTwo >= numThree) {
    console.log(numTwo);
  } else {
    console.log(numThree);
  }
}
// output:- 28
