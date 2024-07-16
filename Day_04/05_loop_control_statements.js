// Day_04: Loops

/* ----- Loop Control Statements ----- */

// Task-8: print numbers from 1 to 10, but skip the number 5 using the "continue" statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
/*
output:-
1
2
3
4
6
7
8
9
10
*/

// Task-9: print numbers from 1 to 10, but stop the loop when the number is 7 using the "break" statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
/*
output:-
1
2
3
4
5
6
*/
