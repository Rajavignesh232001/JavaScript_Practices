// Coding challenge #18: Print the first 100 prime numbers

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  let maxDiv = Math.sqrt(n);
  for (var j = 2; j <= maxDiv; j++) {
    if (n % j == 0) {
      return false;
    }
  }
  return true;
}
for (var n = 1; n <= 100; n++) {
  var z = isPrime(n);
  if (z == true) {
    console.log(n + " " + z + " is Prime");
  }
}
