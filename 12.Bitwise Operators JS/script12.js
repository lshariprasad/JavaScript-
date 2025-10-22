// || Bitwise Operators in JavaScript || //

/* 
Bitwise operators perform operations on binary representations of numbers.
Bitwise AND(&)
Bitwise OR(||)
Bitwise NOT(~)
Bitwise XOR(^)
Left Shift(<<)
Right Shift(>>)
Unsigned Right Shift(>>>)
*/

// BITWISE AND(&) OPERATOR //
const a = 2; // 0010 in binary
const b = 3;
console.log(a & b);

/* 
0010
0011               sicne: 0 - false, 1 - true
----
0010 = 2
----
*/

const c = 12; //1100
const d = 24; //11000
console.log(c & d);

/* 
0000 1100
0001 1000
------------
0000 1000 = 8
------------
*/

// BITWISE OR(|) OPERATOR //

const e = 12; // 1100
const f = 24; // 11000
console.log(e | f);

/* 
0000 1100
0001 1000
------------
0001 1100 = 28 
------------
*/

// BITWISE NOT(~) OPERATOR //

// Formula : ~x = -(x + 1)

const g = 25;
console.log(~g);

// BITWISE XOR(^) OPERATOR //

const h = 2; // 0010
const i = 3; // 0011
console.log(h ^ i);

// Left Shift (<<) Operator //

const j = 10; // 1010
const k = 15; // 1111
console.log(j << 2); // Left Shift by 2 positions.
console.log(k << 3); // Left shift by 3 positions.

/* 
0000 1010 << 2 = 0010 1000 = 40
0000 1111 << 3 = 0111 1000 = 120
*/

// Right Shift (>>) Operator //

const l = 20; // 10100
const m = 25; // 11001
console.log(l >> 2); // Right Shift by 2 positions.
console.log(m >> 3); // Right Shift by 3 positions.

/* 
0001 0100 >> 2 = 0000 0101 = 5
0001 1001 >> 3 = 0000 0011 = 3
*/

// Nullish Coalescing Operator (??) //

const o = null ?? "No Value";
console.log(o); // "No Value"

const p = 35 ?? 45;
console.log(p); // 35

// ??= Nullish Coalescing Assignment Operator //

const user = { name: "Dev" };
console.log(user);
console.log(user.name);

user.city ??= "Chennai";
console.log(user.city);
console.log(user);
