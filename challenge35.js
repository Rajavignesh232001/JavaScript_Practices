//Inverted Left Number Pramid
// 10 9 8 7
// 6 5 4
// 3 2
// 1
var string = "",
  num = 10;
for (var i = 4; i >= 1; i--) {
  for (var j = i; j >= 1; j--) {
    string += num + " ";
    num--;
  }
  string += "\n";
}
console.log(string);
