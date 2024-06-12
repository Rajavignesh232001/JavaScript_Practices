// Sorting an array

const students = [3, 5, 2, 1, 4, 6, 10, 0, 12,9,8,7];
console.log(students);
students.sort();
console.log(students);
students.reverse();
console.log(students);

var res=students.sort(function(a,b){return a-b});
console.log(res);
