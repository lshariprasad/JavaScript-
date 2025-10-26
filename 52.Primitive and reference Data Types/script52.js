//Primitive and reference Data Types
let name = "Deva Krishna";

console.log(name);
console.log(typeof name);
let age = 35;
console.log(typeof age);
let isStudent = true;
console.log(typeof isStudent);
let x;
console.log(typeof x);
let id = Symbol();
console.log(typeof id);

let a = 10;
let b = a;
console.log("A :" + a);
console.log("B :" + b);
a = 25;
console.log("A :" + a);
console.log("B :" + a);

// Reference Type
//Object
let user1 = { name: "Dev", age: 19 };
let user2 = user1;
console.log("User : ", user1);
console.log("User : ", user2);

user1.age = 25;
console.log("User : ", user1);
console.log("User : ", user2);

//Array

let arr1 = [10, 20, 30, 40];
let arr2 = arr1;
console.log("Array 1 : ", arr1);
console.log("Array 2 : ", arr2);

arr1.push(40);
console.log("Array 1 : ", arr1);
console.log("Array 2 : ", arr2);

//Object Clone Use Spread and Object.assign() in javascript

const obje1 = { a: 1, b: 2 };
const obje2 = { c: 3, d: 4 };
const obje3 = Object.assign({}, obje1, obje2);
obje2.c = 45;
console.log(obje3);

const obje4 = { ...obje1, ...obje2 };
console.log(obje4);
