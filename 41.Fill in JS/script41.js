//Fill(value,start,end)

let n = [1, 2, 3, 4, 5, 6];

console.log("Before Fill : " + n);
n.fill(20);
console.log("After Fill : " + n);

n.fill("a");
console.log("After Fill : " + n);

n.fill(20, 3, 5);
console.log("After Fill : " + n);
