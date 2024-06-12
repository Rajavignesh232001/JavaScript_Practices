//Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

var z = 0;
for (var i = 11; i < 30; i += 2) {
  z += i;
}
console.log(z);

var a = 0;
for (var j = 11; j < 30; j++) {
  if (j % 2 != 0) {
    a += j;
  }
}
console.log(a);
