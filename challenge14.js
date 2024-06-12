// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

var a = 0;
var b = 1;
var c = 0;
console.log(a);
console.log(b);
for (var i = 3; i <= 10; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}
