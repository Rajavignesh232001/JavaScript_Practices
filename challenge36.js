// Left Same number row pramid
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
var string = "";
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    string += i + " ";
  }
  string += "\n";
}
console.log(string);
