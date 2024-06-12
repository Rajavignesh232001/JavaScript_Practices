// Coding challenge #11: Calculate the average of the numbers in an array of numbers

function avg() {
  var l = arr.length;
  let tot = 0;
  let average = 0;
  for (var i = 0; i < l; i++) {
    tot += arr[i];
  }
  average = tot / l;
  console.log(average + " %");
}
var arr = [1, 3, 9, 15, 90];
avg();
