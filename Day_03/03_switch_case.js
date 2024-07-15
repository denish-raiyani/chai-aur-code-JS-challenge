// Day_03: Control Structures

/* ----- Switch Case ----- */

// Task-4: use a switch case to determine the day of the week based on a number (1-7).
const day = 4;

switch (day) {
  case 1:
    console.log(`Monday`);
    break;
  case 2:
    console.log(`Tuesday`);
    break;
  case 3:
    console.log(`Wednesday`);
    break;
  case 4:
    console.log(`Thursday`);
    break;
  case 5:
    console.log(`Friday`);
    break;
  case 6:
    console.log(`Saturday`);
    break;
  case 7:
    console.log(`Sunday`);
    break;
  default:
    console.log(`Invalid day number`);
}
// output:- Thursday

// Task-5: use a switch case to assign a grade (A, B, C, D, F) based on score.
const score = 75;

switch (true) {
  case score >= 80:
    console.log(`Grade: A`);
    break;
  case score >= 65:
    console.log(`Grade: B`);
    break;
  case score >= 50:
    console.log(`Grade: C`);
    break;
  case score >= 35:
    console.log(`Grade: D`);
    break;
  default:
    console.log(`Grade: F`);
    break;
}
// output:- Grade: B
