function ticket(p,a){
    let person=p;
    let age=a;
    if(age<=18){
        console.log(person+" needs Child");
    }
    else if(age>18){
        console.log(person+" needs Adult");
    }
}
ticket("Raja",22)
ticket("vicky",10)
ticket("vani",18)

//ternary operator
let age=28
let result = age>18?"Adult Ticket":"child Ticket"
console.log(result);

let num1="Raja";
let num2="raja";
let n=num1===num2?"Same":"Not Same"
console.log(n)