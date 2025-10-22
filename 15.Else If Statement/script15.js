// Else If Statement Example //

// Example 1 //
let number = prompt("Enter your Number: ");

if (number > 0) {
  console.log("The", number, "is Positive Number");
} else if (number < 0) {
  console.log("The", number, "Number is Negative Number");
} else {
  console.log("The Number is 0", "Enter Neither Positive nor Negative");
}

// Example 2 //

let mark = prompt("Enter Your Mark:");

if (mark >= 90 && mark <= 100) {
  console.log("Congratulations ! You have received A Grade");
} else if (mark >= 80 && mark < 90) {
  console.log("Great ! You have received B Grade");
} else if (mark >= 70 && mark < 80) {
  console.log("Good ! You have received C grade");
} else if (mark >= 60 && mark < 70) {
  console.log("You have received D grade");
} else if (mark >= 50 && mark < 60) {
  console.log("You have received E grade");
} else {
  console.log("Sorry ! You have received F grade. Better luck next time.");
}
