// | Variable Declaration in JS | // - 1997 to 2015

var a = 100;
var b = 500;
var c = 700;
d = a + b + c;
console.log("The Total Sum Value is : " + d);

// | 1. Scope | //

// var - Global Scope and Function Scope
// let - Block Scope
// const - Block Scope + Constant Value

if (true) {
  var msg1 = "Hello, Dev Here!"; // Global Scope - You Can Access the inside and outside the Block.
  console.log(msg1); // output: Hello, Dev Here!

  let msg2 = "Hello, Sri Here!"; // Block Scope - You Can Access the inside the Block.
  console.log(msg2); // output: Hello, Sri Here!

  const msg3 = "Love Story Starts Here"; // Block Scope - You Can Access the inside the Block.
  console.log(msg3); // output: Love Story Starts Here
}

console.log(msg1); // output: Hello, Dev Here!

// || OUTPUT ERROR SECTION || //

/* 
console.log(msg2); // Error: msg2 is not defined
console.log(msg3); // Error: msg3 is not defined */

// || 2. Variable Re-declaration || //

var x = 14;
console.log(x);

var x = 18;
console.log(x); // No-Error Variable Re-declared

// || Outer Variable re-declaration || //

let y = 10;
console.log(y);

/* 
let y = 12; 
console.log(y); // Error: Identifier 'y' Has Been Declared
 */

// || Outer Variable re-declaration || //

const z = 1410;
console.log(z);

/* 
const z = 1812;
console.log(z); // Error: Identifier 'z' Has Been Declared */

// || 3. Variable Re-assignment || //

/* var a = 25;
console.log(a);
a = 30;
console.log(a);

let a = 25;
console.log(a);
a = 30;
console.log(a);
// No-Error Variable Re-assigned

const a = 35;
console.log(a);
a = 45;
console.log(a); 
// Error: Assignment to Constant Variable
 */

// || 4. Object Re-assignment || //

const student = {
  name: "DEV",
  age: 19,
  country: "INDIA",
};

console.table(student);
student.name = "SRI";

console.table(student);
