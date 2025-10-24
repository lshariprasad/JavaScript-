// Function in JavaSript //

console.log(25 + 30);

function add(a, b) {
  return a + b;
}
console.log(add(14, 18));
console.log(add(12, 45));

// Function with Arbitrary Arguments //

function sum() {
  let total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(12, 12));
console.log(sum(12, 12, 12, 12, 12));

//spread operator(...)
function total(...args) {
  let total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i]; //total = total + arguments
  }
  return total;
}

console.log(total(12, 12));
console.log(total(12, 12, 12, 12, 12));

// Function as Expression //

const add = function (a, b) {
  return a + b;
};
console.log(add);
console.log(add(100, 200));

// Arrow Function //
// const functionName = (parameters) => { function body };

const add = (a, b) => {
  return a + b;
};
console.log(add);
console.log(add(25, 100));

// Example 1 - Arrow function with Map()

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Example 2 - Using Arrow Function with filter ():

let words = ["Apple", "Orange", "Banana", "Grape"];
console.log(words);
let fileteredWords = words.filter((word) => word.length > 5);
console.log(fileteredWords);

// Example 3 - Using Arrow Function With reduce ():
console.log(numbers);
let total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);

// Example 4 - Using Arrow Function To Create a Closure :

let createcounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

let counter = createcounter();
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
