//Prime number between 50 to 150

function isPrime(n) {
  if (n < 2) {
    return "Not prime";
  }
  if (n == 2) {
    return "Prime";
  }
  maxDiv = Math.sqrt(n);
  for (var i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}
var n,
  p = 1;
for (var j = 50; p <= 100 && j <= 150; j++) {
  n = j;
  var r = isPrime(n);
  if ("Prime" === r) {
    p++;
    console.log(n + " is Prime");
  }
}
