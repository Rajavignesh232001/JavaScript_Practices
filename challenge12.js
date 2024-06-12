// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
function neg(arr) {
    let j=0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]>=0){                       //arr.filter method
        arr2[j] = arr[i];
        j++;
    }
  }
  console.log(arr2);
}

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = [];
neg(arr);
