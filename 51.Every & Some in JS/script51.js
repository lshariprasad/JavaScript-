n = [10, 20, 11, 15, 14];

let result = n.every((value) => {
  return value % 2 == 0;
});

console.log("All Element Are Even : ", result);

result = n.some((value) => {
  return value % 2 == 0;
});

console.log("All Element Are Even : ", result);
