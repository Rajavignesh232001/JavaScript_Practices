//factory function
function createPerson(name) {
  return {
    name,
    greeting(){
      let msg = `My name is ${this.name}`;
      console.log(msg);
    },
  };
}
let raja = createPerson("Raja");
let trisha = createPerson("Trisha");

raja.greeting();
trisha.greeting();