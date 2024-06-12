//Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion
function fibbi(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibbi(n - 1) + fibbi(n - 2);
}
var n = fibbi(10);
console.log(n);
