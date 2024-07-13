// Day_01: Variables and Data Types

/* ----- Variable Declaration ----- */

// Task-1: declare a variable using "var", assign it a number value, and log the value to the console in JavaScript
var myNum = 1234;
console.log(myNum); // 1234

// Task-2: declare a variable using "let", assign it a string value, and log the value to the console in JavaScript
let myStr = "Hello, World!";
console.log(myStr); // Hello, World!


/* ----- Constant Declaration ----- */

// Task-3: declare a variable using "const", assign it a boolean value, and log the value to the console in JavaScript
const isTrue = true;
console.log(isTrue); // true


/* ----- Data Types ----- */

// Task-4: create variables of different data types (number, string, boolean, object, array) and log each variable's type using the "typeof" operator.
// Number:
let myNumber = 123;
console.log(typeof myNumber); // number

// String:
let myString = "Hello, World!";
console.log(typeof myString); // string

// Boolean:
const myBoolean = true;
console.log(typeof myBoolean); // boolean

// Object:
let myObject = { name: "Denish", dob: 23 };
console.log(typeof myObject); // object

// Array:
let myArray = [1, 2, 3, 4, 5];
console.log(typeof myArray); // object


/* ----- Reassigning Variables ----- */

// Task-5: declare a variable using "let", assign it an initial value, reassign a new value, and log both values to the console in JavaScript.
let myVariable = 10;
console.log(myVariable); // Initial value: 10

myVariable = 20;
console.log(myVariable); // New value: 20


/* ----- Understanding "const" ----- */

// Task-6: try reassigning a variable declared with "const" and observe the error.
const myConstant = 100;
console.log(myConstant); // Initial value: 100

myConstant = 200; // Attempt to reassign
console.log(myConstant);
