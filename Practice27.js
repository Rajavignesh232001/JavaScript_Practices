//Conditional Statement

function currentHour(hour) {
  if (hour > 0 && hour <= 3) {
    console.log("Its Night");
  } else if (hour > 3 && hour <= 6) {
    console.log("Its Early Morning");
  } else if (hour > 6 && hour <= 11) {
    console.log("Its Morning");
  } else if (hour > 11 && hour <= 15) {
    console.log("Its AfterNoon");
  } else if (hour > 15 && hour <= 19) {
    console.log("Its Evening");
  } else if (hour > 19 && hour <= 24) {
    console.log("Its Night");
  } else {
    console.log("Time Error");
  }
}
function currentTime(hour, m, s) {
  t = hour + ":" + m + ":" + s;
  return t;
}

let date = new Date();
let hour = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let d = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
var t = 0;
console.log("Today is:");
console.log(d + "/" + month + "/" + year);
currentHour(hour);
currentTime(hour, m, s);
console.log(t);
