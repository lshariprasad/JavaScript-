// Sort in JavaScript

const names = ["Dev", "Sri", "Sathish", "Vijay", "Hari"];
console.log("Before Sort : " + names);
names.sort();
console.log("After Sort : " + names);

const num = [10, 25, 320, 42, 100, 152, 169, 9];
console.log("Before Sort : " + num);
num.sort();
console.log("After Sort : " + num);

num.sort((a, b) => {
  return a - b;
});
console.log("Compare Sort : " + num);

num.sort((a, b) => {
  return b - a;
});
console.log("Desc Compare Sort : " + num);

const users = [
  { name: "Dev", age: 25, city: "chennai" },
  { name: "Sri", age: 19, city: "Andra Pradesh" },
  { name: "Vasavi", age: 19, city: "karnool" },
  { name: "Sathish", age: 26, city: "Avaid" },
  { name: "Vijay", age: 20, city: "Madhuvalu" },
  { name: "Hari", age: 30, city: "Mangadu" },
];

console.table(users);

users.sort((a, b) => {
  return a.age - b.age;
});

console.table(users);

users.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.table(users);
