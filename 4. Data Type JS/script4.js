// || Data Types in JS || //
/* 
JS Dynamic Progrmamming Language

Number in Data Types: Ex: 100,200,32.5,125.6;
String in Data Types: Ex: "Sri", 'Krishna', `Dev`;
Boolean in Data Types: Ex: true or false;
Null in data types : Ex: null or 0 or Undefined;
Symbol in data types : Ex: Symbol("description");

Array
Object literals
Data

*/

var a = 25;
console.log(typeof a);

var name = "Sri Krishna";
console.log(typeof fname);

var isMarried = true;
console.log(typeof isMarried);

var phone = null;
console.log(typeof phone);

let b;
console.log(typeof b);

//ES6 Symbol Data Type - 2015 //4

const s1 = Symbol();
console.log(s1);

const s2 = Symbol();
console.log(s2);

console.log(s1 == s2);

// Object Data Type //

var course = ["HTML", "CSS", "JS", "REACTJS"];
console.log(typeof course);

var person = {
  Sname: "SriKrishna",
  Age: 19,
};
console.log(typeof person);

var d = new Date();
console.log(d);
console.log(typeof d);
