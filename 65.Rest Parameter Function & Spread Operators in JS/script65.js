// Differences Between Rest Parameter Functions and Spread Operators in JavaScript

//Rest Parameter Functions

function myFunction(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

myFunction(10, 20, 30, 40, 50, 60);

//Spread Operators
let myArray = [1, 2, 3];
let newArray = [...myArray, 4, 5];
console.log(newArray);
