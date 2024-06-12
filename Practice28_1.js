//Switch Case Statement

let grade = "A";

switch (grade) {
  case "S":
    console.log("Excellent Grade");
    break;
  case "A":
  case "B":
  case "C":
    console.log("Good Grade");
    break;
  case "D":
  case "E":
    console.log("Just Pass! Grade");
    break;
  case "F":
    console.log("Failed Grade");
    break;
  default:
    console.log("Unknown Grage");
}
