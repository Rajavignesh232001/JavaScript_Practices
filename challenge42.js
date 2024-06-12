// Invert Right star pramid
// * * * * *
//   * * * *
//     * * *
//       * *
//         *
var n = 5,
  string = "";
for (var i = 5; i >= 1; i--) {
  for (var s = 4; s >= i; s--) {
    string += " " + " ";
  }
  for (var j = i; j >= 1; j--) {
    string += " " + "*";
  }
  string += "\n";
}
console.log(string);
