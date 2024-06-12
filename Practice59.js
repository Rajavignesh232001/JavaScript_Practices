// Joining & Spliting
// Join
let dailyRoutine = ["wakeup", "eat", "sleep"];
let joined = dailyRoutine.join("ing, ");
console.log(joined);
// split
let fullName = "Raja Vignesh";
let userName = fullName.split(" ");
let firstName = userName[0];
let lastName = userName[1];
console.log(
  "My First Name is :" + firstName + " and my last name is : " + lastName
);
let joint_name = userName.join("_").toLocaleLowerCase();
console.log(joint_name);
