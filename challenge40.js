//Right side Pramid
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function nor(n) {
  var string = "";
  for (var i = 1; i <= n; i++) {
    for (var s = 1; s <= n - i; s++) {
      string += " ";
    }
    for (var j = 1; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
nor(5);
