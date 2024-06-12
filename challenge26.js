// Coding challenge #26: Create a function that will receive two arrays and
// will return an array with elements that are in the first array but not in the second

function firstArrayElementExclusive(arr1, arr2) {
  for (i of arr1) {
    if (!arr2.includes(i)) {
      arr3.push(i);
    }
  }
  return arr3;
}
let arr1 = [1, 2, 3, 10, 5, 3, 14];
let arr2 = [-1, 4, 5, 6, 14];
let arr3=[];
let r = firstArrayElementExclusive(arr1, arr2);
console.log(r);
