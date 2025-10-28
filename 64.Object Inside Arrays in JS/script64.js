//Object inside Arrays in JavaScript

const users = [
  { name: "Dev", age: 19, email: "Dev@gmail.com" },
  { name: "Hari", age: 20, email: "hari@gmail.com" },
  { name: "krishna", age: 16, email: "krishna@gmail.com" },
];
console.log(users);

for (const user of users) {
  console.log(user);
  console.log(user.name);
}

const olderUsers = users.filter((user) => user.age >= 19);
console.log(olderUsers);
