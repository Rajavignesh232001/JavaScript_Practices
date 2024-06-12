//Flag Star
// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *
// *  *
// *
// *
// *
// *
// *
// *
var string = "",
  n1 = 4,
  n2 = 3;
for (var i = 1; i <= n1; i++) {
  for (var j = 1; j <= i; j++) {
    string += "*\t";
  }
  string += "\n";
}

for (var k = 3; k >= 1; k--) {
  for (var l = k; l >= 1; l--) {
    string += "*\t";
  }
  string += "\n";
}

for (var m = 1; m <= 5; m++) {
  string += "*\n";
}
console.log(string);
