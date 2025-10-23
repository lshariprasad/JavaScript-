// || String Method || //

let first_name = "DEVA";
let last_name = "KRISHNA";

// Concatenation - JS //

let c = first_name + " " + last_name;
console.log("Concatenation : " + c);

// Concat //

c = first_name.concat(" ", last_name);
console.log("Concat : " + c);

// Append //
c = "Dev";
c += "Krishna";
console.log("Append : " + c);

// Escaping String //
c = "She Can't run ";
// c = 'She Can\'t run';
console.log(c);

// Length //
c = first_name.length;
console.log("Length : " + c);

// String UpperCase //
c = first_name.toUpperCase();
console.log("UpperCase : " + c);

// String LowerCase //
c = first_name.toLowerCase();
console.log("LowerCase : " + c);

// IndexOf JS //
c = first_name.indexOf("V");
console.log("indexof : " + c);

// lastIndexOf JS //
c = first_name.lastIndexOf("V");
console.log("lastindexof : " + c);

// CharAt() JS //
c = first_name.charAt(1);
console.log("charAt 1 : " + c);

c = first_name.charCodeAt(1);
console.log("charcodeAt 1 : " + c);

// substr //
c = first_name.substr(0, 3);
console.log("substr : " + c);

// Substring //
let text = "01234567890";
c = text.substring(0, 4);
console.log("Substring : " + c);

c = text.substring(4);
console.log("Substring : " + c);

c = text.substring(4, 0);
console.log("Substring : " + c);

c = text.substring(25, 35);
console.log("Substring : " + c);

// Slice //
c = text.slice(2, 4);
console.log("slice : " + c);

c = text.slice(4, 2);
console.log("slice : " + c);

c = text.slice(25, 34);
console.log("slice Invalid Length : " + c);

c = text.slice(-3);
console.log("slice -3 : " + c);

// Split in JS //

let a = "Saveetha School of Engineering";
c = a.split(" ");
console.log("split : " + c);
console.table(c);

// Replace in JS //

a = "I am From Chennai";
console.log("Before Replace : " + a);
c = a.replace("Chennai", "Salem");
console.log("After Replace : " + c);

// include in JS //

const pets = ["Cat", "Dog", "Bat"];
console.log(pets.includes("Cat"));
console.log(pets.includes("Spider"));

// trim in JS //
a = " Dev ";
console.log("Before Trim : " + a.length);
a = a.trim();

//padstart() & padEnd // - 2017
a = "5";
a = a.padStart(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, "$");
console.log(a);

// long Literal Strings //
let longString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
  "Deserunt autem inventore consequatur atque eum itaque, nostrum non quidem cupiditate magni?" +
  "Quas accusamus recusandae inventore id suscipit voluptatem laboriosam voluptas incidunt?";
console.log(longString);

let longstring =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
  Deserunt autem inventore consequatur atque eum itaque, nostrum non quidem cupiditate magni? \
  Quas accusamus recusandae inventore id suscipit voluptatem laboriosam voluptas incidunt?";
console.log(longstring);

// String.fromCharCode() in JS //

console.log(String.fromCharCode(65, 66, 67, 68, 97, 98, 99, 100));
