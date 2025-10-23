let user = {
  name: "Deva Krishna",
  age: 19,
  city: "Chennai",
  contact: "9962466372",
};

for (let prop in user) {
  console.log(prop + " : " + user[prop]);
}

let arr_keys = Object.keys(user);
console.table(arr_keys);

let arr_values = Object.values(user);
console.table(arr_values);

for (let i = 0; i < arr_keys, length; i++) {
  console.log(arry_keys[i] + ":" + arr_values[i]);
  console.log(user[arr_keys[i]]);
}
