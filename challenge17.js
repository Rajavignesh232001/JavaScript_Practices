// Coding challenge #17: Calculate the sum of digits of a positive integer number

function sumOfDigit(n) {
  var sum = 0;
  let s = n.toString();
  for (var c of s) {
    sum += parseInt(c);
  }
  return sum;
}
var n = 1235231;
console.log(sumOfDigit(n));

