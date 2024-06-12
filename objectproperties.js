var person = {
    fname: " John",
    lname: " Doe",
    age: 25
};

var txt = "";

for (let x in person) {
    txt += person[x];
}

console.log(txt+" ");
