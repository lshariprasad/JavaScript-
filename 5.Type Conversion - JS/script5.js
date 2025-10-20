// Type Conversion in JS //

let a;
a = 25;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 25.14;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = new Date();
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = [25, 14, 56, 78];
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = 25;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);

// ||Type Conversion || //

// String to Number Conversion //

a = "1234";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = false;
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

// || ARRAYS TO Number CONVERSION || //

a = [1, 2, 3, 4, 5];
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = "Sri Krishna";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

a = 35;
console.log(a, typeof a);
a = parseInt(a);
console.log(a, typeof a);

a = 35.52;
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);
