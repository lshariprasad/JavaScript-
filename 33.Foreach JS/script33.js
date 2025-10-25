/*
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// value,index,Array;

number.forEach((value) => {
  console.log(value);
});

number.forEach((value, index) => {
  console.log("Index : " + index + " Value: " + value);
});

const users = [
  { full_name: "Dev", age: 19, city: "Tamil Nadu", Salary: 1000000 },
  { full_name: "Sri", age: 19, city: "Andra Pradesh", Salary: 1000000 },
  { full_name: "Vasavi", age: 18, city: "Kurnool", Salary: 900000 },
  { full_name: "Hari", age: 18, city: "Chennai", Salary: 900000000 },
  { full_name: "Sathish", age: 18, city: "Salem", Salary: 200000 },
  { full_name: "Vijay", age: 20, city: "Dharmapuri", Salary: 300000 },
];
console.table(users);

users.forEach((value) => {
  console.log(value.full_name);
});


// Exploring the forEach method in JAVASCRIPT.

//1.Example of Using the forEach method to print each element of an arry:

const fruits = ["apple", "banana", "cherry", "Orange"];
console.log(fruits);
fruits.forEach((fruit) => console.log(fruit));

//2. Example of using the forEach method to sum all elements of an array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
numbers.forEach((number) => {
  total += number;
});
console.log(total);

//3.Example of Using the forEach Method to Create a new array from an existing one:

const doubledNumbers = [];
numbers.forEach((number) => {
  doubledNumbers.push(number * 2);
});

console.log(doubledNumbers);

//4.Example of using the forEach method to find the max element of an array:
console.log(numbers);
let max = numbers[0];
numbers.forEach((number) => {
  if (number > max) {
    max = number;
  }
});
console.log(max);

//5. Example of Using the forEach method to calculate the average of an array:
console.log(numbers);
let totaladd = 0;
numbers.forEach((number) => {
  totaladd += number;
});
console.log("Average : " + totaladd / numbers.length);


//6.Example of Using the forEach method to filter an array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evennumbers = [];

numbers.forEach((number) => {
  if (number % 2 === 0) {
    evennumbers.push(number);
  }
});
console.log(evennumbers);



//7.Example of using the forEach method to update elements of an array:

const names = ["Dev", "Sri", "Hari", "Vasavi"];
console.log(names);
names.forEach((name, index) => {
  console.log(name, index);
  names[index] = name.toUpperCase();
});

console.log(names);
  */
