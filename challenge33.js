//Right Pascal Star Pramid
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
// var j=1;
// var string = "";
// for (var i = 1; i <= 5; i++) {
//   for ( j = 1; j <= i; j++) {
//     string += "* ";
//   }
//   string += "\n";
// }
var j = 1;
var string = "";
for (var i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    string += "* ";
  }
  string += "\n";
}
for (var i = 4; i >= 1; i--) {
  for (var j = i; j >= 1; j--) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
