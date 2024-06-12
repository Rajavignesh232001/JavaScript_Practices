//ES 6 Arrow Function

//Tradation Fuction
function add(a, b) {
  return a + b;
}
let a = 2,
  b = 3;
let x = add(a, b);
console.log(x);
//Arrow Function
var add = (a, b) => a + b;
console.log(add(a, b));

let c = 3,
  d = 1;
let y = (c, d) => {
  return c - d;
};
console.log(y(c, d));

// Area of Circle
let area = (r) => Math.PI * r * r;
console.log(area(2));
//Area of Square
let sqr = (s) => Math.pow(s, 2);
console.log(sqr(4));
