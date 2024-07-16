// Day_04: Loops

/* ----- Nested Loops ----- */

// Task-7: print a pattern(*) using nested for loops.

for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "* ";
  }
  console.log(line);
}

/*
output:-
*
* *
* * *
* * * *
* * * * *
*/
