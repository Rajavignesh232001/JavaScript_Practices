// Coding challenge #28: Calculate the sum of first 100 prime numbers4
function primeAdd(i){
    if(i<2){
        return false;
    }
    if(i===2){
        return true;
    }
    var maxDiv=Math.sqrt(i);
    for(var j=2;j<=maxDiv;j++){
        if(i%j==0){
            return false;
        }
    }
    return true;
}

var n=10;
var z=0;
var tot=0;
for(var i=1;z<n;i++){
    var r=primeAdd(i);
    if(r===true){
        tot+=i;
        z++;
    }
}
console.log("Total for First "+z+" Prime number is : "+tot);
