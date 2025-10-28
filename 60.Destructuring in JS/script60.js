//Destructuring in JavaScript

//Array
let numbers = [10, 20, 30, 40, 50];

/* let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
let d = numbers[3];
 */

/* let [a, b, c, , d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d); */

/* let [a, b, ...c] = numbers;
console.log(a);
console.log(b);
console.log(c); */

/* let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let [[a, b], [c, d], [e, f]] = nestedArray;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
console.log(e); //5
console.log(f); //6
 */

//Object

/* let person = { name: "Vasavi", age: 19, gender: "female" };

let { name, age, gender } = person;
console.log(name);
console.log(age);
console.log(gender); */

/* let address = {
  street: "Mangadu",
  city: "Chennai",
  state: "Tamil Nadu",
  zip: "600122",
};

let user = {
  name: "Sri",
  age: 18,
  gender: "female",
  address,
};

console.table(user);
console.log(user);

let {
  name,
  age,
  gender,
  address: { street, city, state, zip },
} = user;

console.log(name);
console.log(age);
console.log(gender);
console.log(street);
console.log(city);
console.log(state);
console.log(zip);
 */
