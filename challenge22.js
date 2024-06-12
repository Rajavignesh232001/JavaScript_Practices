// Coding challenge #22: Reverse an array

function rev(arr){
   for(var i=arr.length-1;i>=0;i--){
      arr2.push(arr[i]);
   }
   return arr2;
}
var arr=[1,2,3,4];
var arr2=[];
console.log(rev(arr));