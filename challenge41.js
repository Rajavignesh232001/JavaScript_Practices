//Right side number pramid
//              1
//            2 3
//          4 5 6
//       7 8 9 10
// 11 12 13 14 15

var n = 4,
  string = "",
  num = 1;
for (var i = 1; i <= n; i++) {
  for (var s = 1; s <= n - i; s++) {
    string += " " + " " + " ";
  }
  for (var j = 1; j <= i; j++) {
    string += " " + " " + num;
    num++;
  }
  string += "\n";
}
console.log(string);
