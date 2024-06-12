//Left Number Pramid
// 1
// 2 3
// 4 5 6
// 7 8 9 10
var string = "";
var num = 1;
for (var i = 1; i <= 5; i++) {
  for (var j = 1; j < i; j++) {
    string += num + " ";
    num++;
  }
  string += "\n";
}
console.log(string);
