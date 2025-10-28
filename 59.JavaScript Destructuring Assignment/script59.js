// Array Destruturing:
// Before ES6
/* const number = [1, 2, 3, 4, 5];
const first = number[0];
const second = number[1];
const rest = number.slice(2);

console.log(first);
console.log(second);
console.log(rest);
 */

/* //After ES6:

const number = [1, 2, 3, 4, 5];
const [first, second, ...rest] = number;
console.log(first);
console.log(second);
console.log(rest);
 */

// Object Destructuring:
// Before ES6

/* const person = { name: "Dev", age: 19, gender: "Male" };
const name = person.name;
const age = person["age"];
const gender = person.gender;
console.log(name);
console.log(age);
console.log(gender);
 */

/* const person = { name: "Dev", age: 19, gender: "Male" };
const { name, age, gender } = person;
console.log(name);
console.log(age);
console.log(gender); */

//using default values with array destructuring

/* const numbers = [1, 2];
const [x, y, z = 3] = numbers;

console.log(x);
console.log(y);
console.log(z); */

/* const person = { name: "vasavi", age: 19 };

const { name, age, gender = "Female" } = person;
console.log(name);
console.log(age);
console.log(gender); */

/* //Swapping Variables
let a = 1;
let b = 2;
console.log("a :", a);
console.log("b :", b);
[a, b] = [b, a];
console.log("a :", a);
console.log("b :", b); 

or

 let c;
console.log(a);
console.log(b);
a = b;
b = c;
b = c;
console.log(a);
console.log(b); */

/* //Skipping Unwated Items with Destructuring Assignment

let myArray = [1, 2, 3, 4, 5];
let [first, , , fourth] = myArray;

console.log(first);
console.log(fourth); */

/* let myArray = [1, 2, 3, 4, 5, 6, 7];
let [first, second, ...rest] = myArray;
console.log(first);
console.log(second);
console.log(rest);
 */

/* let myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

let { a, b, ...rest } = myObj;
console.log(a);
console.log(b);
console.log(rest);
 */

/* const user = {
  name: "Vasavi",
  address: {
    city: "chennai",
    state: "Tamil Nadu",
    country: "India",
  },
};

const {
  name,
  address: { city, state },
} = user;

console.log(name);
console.log(city);
console.log(state);

const number = [1, 2, [3, 4, [5, 6]]];
const [a, b, [c, d, [e, f]]] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
 */

const user = [
  {
    name: "Vasavi",
    address: {
      city: "chennai",
      state: "Tamil Nadu",
      country: "India",
    },
  },
  {
    name: "Hari",
    address: {
      city: "chennai",
      state: "Tamil Nadu",
      country: "India",
    },
  },
];

const [
  {
    name: name1,
    address: { city: city1 },
  },
  {
    name: name2,
    address: { city: city2 },
  },
] = user;

console.log(name1);
console.log(city1);
console.log(name2);
console.log(city2);
