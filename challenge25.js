// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and
// return an array composed of all the numbers that are either in the first array or second array but not in both
function mergeExclusive(arr1, arr2) {
  for (var i of arr1) {
    if (!arr2.includes(i)) {
      arr3.push(i);
    }
  }
  for (var i of arr2) {
    if (!arr1.includes(i)) {
      arr3.push(i);
    }
  }
  return arr3;
}

var arr1 = [1, 2, 3, 10, 5, 3, 14];
var arr2 = [1, 4, 5, 6, 14];
var arr3 = [];
var r = mergeExclusive(arr1, arr2);
console.log(r);
