//Left Star Pramid
// *
// * *
// * * *
// * * * *
// * * * * *

var j = 1;
var string = "";
for (var i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
