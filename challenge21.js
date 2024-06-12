// Coding challenge #21: Rotate an array to the right 1 position

function rotateRight(arr) {
  var f = arr.pop();
  arr.unshift(f);
}
let arr = [2, 3, 4];
rotateRight(arr);
console.log(arr);
