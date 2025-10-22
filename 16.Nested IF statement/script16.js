// Nested If Statement Example //
// Example 1 //

let Tamil = prompt("Enter your Tamil Mark: ");
let English = prompt("Enter Your English Mark: ");
let Maths = prompt("Enter Your Maths Mark: ");
let Science = prompt("Enter Your Science Mark: ");
let Social = prompt("Enter Your Social Mark: ");

let total;
let Average;

if (
  Tamil >= 35 &&
  English >= 35 &&
  Maths >= 35 &&
  Science >= 35 &&
  Social >= 35
) {
  total =
    parseInt(Tamil) +
    parseInt(English) +
    parseInt(Maths) +
    parseInt(Science) +
    parseInt(Social);
  Average = total / 5;

  // Grade logic inside the same block
  if (Average >= 90 && Average <= 100) {
    console.log("🎉 Congratulations! You Got S Grade.");
  } else if (Average >= 80 && Average < 90) {
    console.log("👏 Great! You Got A Grade.");
  } else if (Average >= 70 && Average < 80) {
    console.log("👍 Good! You Got B Grade.");
  } else if (Average >= 60 && Average < 70) {
    console.log("🙂 You Got C Grade.");
  } else if (Average >= 50 && Average < 60) {
    console.log("😐 You Got D Grade.");
  } else if (Average >= 40 && Average < 50) {
    console.log("😅 You Got E Grade.");
  } else {
    console.log("😞 Sorry! You Have No Grade... Try Next Time...");
  }
} else {
  console.log(
    "❌ Sorry! You are not eligible (failed in one or more subjects)."
  );
}

console.log("Total:", total ?? "Not Eligible");
console.log("Average:", Average ?? "Not Eligible");
