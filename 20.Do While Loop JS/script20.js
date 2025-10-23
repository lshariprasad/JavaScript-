let table = Number(prompt("Enter The Table : "));
let limit = Number(prompt("Enter The Limits: "));

let a = 1;

while (a <= limit) {
  let c = table * a;
  // console.log(table + " x " + a + " = " + c);
  console.log(` ${table} x ${a} = ${c}`);
  a++;
}
