const n = [1, 2, 3, 4, 5, 6];
console.log("Before Reverse : ", n);
n.reverse();
console.log("After Reverse : ", n);

//Array Element With Length Property
const x = { 0: 10, 1: 20, 2: 30, 3: 40, length: 4 };
console.log("Before Reverse : ", x);

Array.prototype.reverse.call(x);
console.log("After Reverse : ", x);
