// Reduce() in JavaScript
/* 
array.reduce(function(accumulator,currentValue,currentIndex,array){

},initialValue);
*/

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);

//Flattening An Array
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(nestedArray);
let FlattenedArray = nestedArray.reduce((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);
console.log(FlattenedArray);
//..........................................................................

let colors = ["red", "blue", "green", "red", "yellow", "violet", "blue"];
let colorcounts = colors.reduce((accumulator, currentValue) => {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1; //{red:2,blue:2,green:1,yellow:1,violet:1}
  }
  return accumulator;
}, {});

console.log(colorcounts);

let num = [5, 10, 15, 20, 25];

let largest = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
});
console.log(largest);

let people = [
  { name: "Dev", age: 25, city: "chennai" },
  { name: "Sri", age: 19, city: "Andra Pradesh" },
  { name: "Vasavi", age: 22, city: "karnool" },
];

let groupedByCity = people.reduce((accumulator, currentValue) => {
  if (currentValue.city in accumulator) {
    accumulator[currentValue.city].push(currentValue);
  } else {
    accumulator[currentValue.city] = [currentValue];
  }
  return accumulator;
}, {});
console.log(groupedByCity);
