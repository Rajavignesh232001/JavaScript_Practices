//Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size.
// The numbers are received as strings and the result should be also provided as string.

function add(n1, n2) {
  var s = "";
  carry = 0;
  maxSize = Math.max(n1.length, n2.length);
  for (var i = 0; i < maxSize; i++) {
    var digit1 = numberFromRight(n1, i);
    var digit2 = numberFromRight(n2, i);
    var sum = digit1 + digit2 + carry;
    var digitSum = sum % 10;
    carry = sum >= 10 ? 1 : 0;
    s = digitSum.toString() + s;
  }
  if (carry > 0) s = carry + s;
  return s;
}
function numberFromRight(s, digitNo) {
  if (digitNo >= s.length) return 0;

  var char = s[s.length - 1 - digitNo];
  return parseInt(char);
}

var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);
console.log(sum);
