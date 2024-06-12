// Odd Pramid
// 1
// 3 5
// 7 9 11
// 13 15 17 19
// 21 23 25 27 29
var num = 1,
  string = "";
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    string += num + " ";
    num += 2;
  }
  string += "\n";
}
console.log(string);
