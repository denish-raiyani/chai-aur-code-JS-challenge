// Day_03: Control Structures

/* ----- Combining Conditions ----- */

// Task-5: check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400).
const year = 1996;

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

if (isLeapYear) {
  console.log(`Year ${year} is a leap year.`);
} else {
  console.log(`Year ${year} is not a leap year.`);
}
// output:- Year 1996 is a leap year.

/* -- Other Examples -- */
// Example-1 (AND "&&" Operator)
const age = 28;
const hasLicense = true;
console.log(age >= 18 && hasLicense ? `You can drive.` : `You cannot drive.`); // output:- You can drive.

// Example-2 (OR "||" Operator)
const isWeekend = true;
const isHoliday = false;
console.log(isWeekend || isHoliday ? `Take a break!` : `Keep working.`); // output:- Take a break!

// Example-3 (NOT "!" Operator)
const isRaining = false;
console.log(!isRaining ? `Go outside.` : `Stay indoors.`); // output:- Go outside.
