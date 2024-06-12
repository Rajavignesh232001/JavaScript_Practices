//Object Clone

let person = {
  name: "Raja",
  age: 24,
};
//normal
let personClone = person;
console.log(personClone);
//Spread Opr
let personClone2 = { ...person };
console.log(personClone2);
//assign Opt
let personClone3 = Object.assign({ gender: "Male" }, person);
console.log(personClone3);

console.log(personClone);
