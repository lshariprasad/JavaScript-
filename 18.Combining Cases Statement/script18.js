let letter = prompt("Enter The Vowel Letter : ");

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log(letter + " Is An Vowel");
    break;
  default:
    console.log(letter + " Is Not an Vowel");
    break;
}
