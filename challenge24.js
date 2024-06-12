// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

function mergeArray(arr1, arr2) {
  for (var i = 0; i <= arr1.length-1; i++) {
    arr3.push(arr1[i]);
  }
  for (var j = 0; j <= arr2.length-1; j++) {
    arr3.push(arr2[j]);
  }
  return arr3;
}
var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];
var arr3 = [];
var r=mergeArray(arr1, arr2);
console.log(r);
