// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
function getPrime(nPrimes, startAt) {
  var arr = [];
  var arrNotPrime = [];

  for (var i = startAt; arr.length < nPrimes; i++) {
    if (isPrime(i)) {
      arr.push(i);
    } else {
      arrNotPrime.push(i);
    }
  }

  function isPrime(num) {
    if (num < 2) return false;
    for (var j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }

  return [arr, arrNotPrime];
}

var nPrimes = 10;
var startAt = 100;
var [primesArr, notPrimesArr] = getPrime(nPrimes, startAt);

console.log("Prime numbers:", primesArr);
console.log("Non-prime numbers:", notPrimesArr);

