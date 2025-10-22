// Simple Example of Conditional (Ternary) Operator //

const age = 19;
const result = age >= 18 ? "You can vote" : "You cannot Vote";
console.log(result);

// Handing The Null Value Using Ternary Operator //

function welcome(user) {
  const result = user ? user : "No User";
  console.log("Welcome " + user);
}

welcome();
welcome(null);
welcome("DEV");
welcome("SRI");

user = { name: "DEV", age: 19 };
console.log(user);
console.log(user.name);

const greeting = (user) => {
  const name = user.name ? user.name : "No Name";
  return "HELLO " + name;
};

console.log(greeting(user));

// Conditional Chains //

const avg = 90;
const grade =
  avg >= 90
    ? "A Grade"
    : avg >= 80
    ? "B Grade"
    : avg >= 70
    ? "C Grade"
    : "D Grade";
console.log(grade);
