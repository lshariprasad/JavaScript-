// Filter() Method in JavaScript //

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennumbers = numbers.filter((number) => number % 2 == 0);
console.log(evennumbers);

//......................................................................

let users = [
  { name: "Dev", age: 19 },
  { name: "Sri", age: 18 },
  { name: "Hari", age: 35 },
];

let eligible = users.filter((user) => user.age > 30);
console.log(eligible);

//......................................................................

let words = ["cat", "dog", "elephant", "fish", "giraffe"];

let fourwords = words.filter((word) => word.length >= 4);
console.log(fourwords);

//......................................................................

let items = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
  { name: "beetroot", category: "vegetable" },
];

let vegetables = items.filter((item) => item.category === "vegetable");
console.log(vegetables);

//......................................................................

let animals = ["eagles", "cat", "dog", "elephant", "fish", "giraffe"];

let wordStartswithE = words.filter((word) => word.startsWith("e"));
console.log(wordStartswithE);

//......................................................................

const products = [
  { name: "apple", category: "fruit", price: 100 },
  { name: "carrot", category: "vegetable", price: 50 },
  { name: "Orange", category: "fruit", price: 120 },
  { name: "Broccoli", category: "vegetable", price: 75 },
  { name: "Mango", category: "fruit", price: 110 },
];

let expensivefruit = products.filter(
  (product) => product.category === "fruit" && product.price > 100
);
console.log(expensivefruit);
