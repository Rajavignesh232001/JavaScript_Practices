//Inverted Left Star Pramid
// * * * * *
// * * * *
// * * *
// * *
// *
var string = "";
for (var i = 5; i >= 1; i--) {
  for (var j = i; j >= 1; j--) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
