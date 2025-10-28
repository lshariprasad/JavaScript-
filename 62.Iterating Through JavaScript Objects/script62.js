// Iterating Through JavaScript Objects

//Using the for-in loop
const user = {
  name: "Sri",
  age: 20,
  job: "Programmer",
};
console.log(user);

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

//Using Object.keys()
const keys = Object.keys(user);
console.log(user);
keys.forEach((key) => {
  console.log(`${key} : ${user[key]}`);
});

//Using Object.values()
const values = Object.values(user);
console.log(values);
keys.forEach((value) => {
  console.log(`${value}`);
});

//Using Object.entries()
const entries = Object.entries(user);
console.log(entries);
entries.forEach((entry) => {
  console.log(`${entry[0]} : ${entry[1]}`);
});

for (let i = 0; i < entries.length; i++) {
  console.log(`${entry[i][0]} : ${entries[i][1]}`);
}
