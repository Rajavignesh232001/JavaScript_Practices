//Coding challenge #13: Find the maximum number in an array of numbers

function Max() {
  var z = 0;
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > z) {
      z = arr[i];
    }
  }
  console.log(z);
}
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
Max();
