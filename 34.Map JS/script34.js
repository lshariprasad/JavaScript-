/* 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map(value , index , array)
let squareroot = numbers.map((value) => {
  return Math.sqrt(value).toFixed(2);
});
console.log(squareroot);
console.table(squareroot);

const users = [
  { full_name: "Dev", age: 19, city: "Tamil Nadu", Salary: 1000000 },
  { full_name: "Sri", age: 19, city: "Andra Pradesh", Salary: 1000000 },
  { full_name: "Vasavi", age: 16, city: "Kurnool", Salary: 900000 },
  { full_name: "Hari", age: 16, city: "Chennai", Salary: 900000000 },
  { full_name: "Sathish", age: 17, city: "Salem", Salary: 200000 },
  { full_name: "Vijay", age: 12, city: "Dharmapuri", Salary: 300000 },
];

console.table(users);

let eligible_status = users.map((user) => ({
  name: user.full_name,
  age: user.age,
  city: user.city,
  Salary: user.Salary,
  status: user.age >= 18 ? "Eligible" : "Not Eligible",
}));

console.table(eligible_status);


//map in javascript

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);
*/
/* 
originalArray.map(current_value,index,originalArray);


//2. Modifying Array Elements

const words = ["hello", "world"];
console.log(words);
const capitalizedWords = words.map((word) => word.toUpperCase());
console.log(capitalizedWords);

//3. combining Arrays
const fruits = ["Apple", "Banana"];
const colors = ["red", "yellow"];

const fruitscolors = fruits.map((fruit, index) => fruit + "-" + colors[index]);
console.log(fruitscolors);


//4.Filtering An Array
const numbers = [1, 2, 3, 4, 5];
const evennumbers = numbers.map((num) => num % 2 == 0);
console.log(evennumbers);


// 5. Extracting Properties from an array of objects
const users = [
  { name: "Dev", age: 20 },
  { name: "Hari", age: 19 },
  { name: "Sri", age: 22 },
  { name: "Vasavi", age: 30 },
];

const names = users.map((user) => user.name);
console.log(names);

//6.Modifying an Array of Objects
console.log(users);

const updatedUsers = users.map((user) => {
  return {
    name: user.name,
    age: user.age + 1,
  };
});

console.log(updatedUsers);


const words = ["apple", "Banana", "Cherry"];

const wordStarts = words.map(function (current_value, index, array) {
  return {
    word: current_value,
    length: current_value.length,
    position: index,
    totalWords: array.length,
  };
});

console.log(wordStarts);
 */
