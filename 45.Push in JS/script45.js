let n = [1, 2, 3, 4, 5];
console.log(n);
console.log(n.push(60));
console.log(n);

n.push(70, 85, 90, 100);
console.log(n);

let fruits = ["Apple"];
console.log(fruits);

fruits.push("orange");
console.log(fruits);

fruits.push("Banana", "Pineapple");
console.log(fruits);

//Merging Two Arrays
let users1 = ["Ram", "Sam", "Ravi"];
let users2 = ["Rajesh", "Kumar"];

users1.push(...users2);
console.log(users1);
