// Inverted Left same number row Pramid
//5 5 5 5 5
// 4 4 4 4
// 3 3 3
// 2 2
// 1
var string = "";
for (var i = 5; i >= 1; i--) {
  for (var j = i; j >= 1; j--) {
    string += i + " ";
  }
  string += "\n";
}
console.log(string);
