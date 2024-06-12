// Coding challenge #20: Rotate an array to the left 1 position

function rotateLeft(arr) {
  var f = arr.shift();
  arr.push(f);
}
let arr = [2, 3, 4];
rotateLeft(arr);
console.log(arr);
