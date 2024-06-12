// Constructor Functions

function Person(name){
    this.name=name;
    this.greeting=function(){
        console.log(`My Name is ${this.name}`);
    }
}
let person=new Person("Raja");
person.greeting();