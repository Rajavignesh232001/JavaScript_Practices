//OOP
const person = {
  name: "Raja",
  age: 24,
  isGraduate: true,
  intrest: ["programming", "web design"],
  address: {
    city: "Chennai",
    state: "Tamil Nadu",
  },
  greeting: function () {
    let msg = `My name is ${this.name},i love ${this.intrest}`;
    console.log(msg);
  },
};

person.greeting();
