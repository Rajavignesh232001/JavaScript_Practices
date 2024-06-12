//Coding challenge #6: Calculate 10!

function fact(n) {
  let z = 1;
  for (var i = 1; i <= n; i++) {
    z *= i;
  }
  console.log(z);
}

let n = 10;
fact(n);
