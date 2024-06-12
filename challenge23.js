// Coding challenge #23: Reverse a string

function str(s){
    for(var i=s.length-1;i>=0;i--){
        var c=s[i];
        s2+=c;
    }
    return s2;
}
var s="Raja";
var s2="";
str(s);
console.log(s2);
