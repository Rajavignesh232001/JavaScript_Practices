// Left Prime pramid
// 1
// 2  3
// 5  7  11
// 13 17 19 23

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  var maxDiv = Math.sqrt(n);
  for (var z = 2; z <= maxDiv; z++) {
    if (n % z === 0) {
      return false;
    }
  }
  return true;
}
var string = "",
  num = 1;
for (var i = 1; i <= 4; i++) {
  for (var j = 1; j <= i; j++) {
    while (!isPrime(num)) {
      num++;
    }
    string += num + " ";
    num++;
  }
  string += "\n";
}
console.log(string);
