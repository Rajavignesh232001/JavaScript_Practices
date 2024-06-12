// Coding challenge #29: Print the distance between the first 100 prime numbers

function prime(i){
    if(i<2){
        return false;
    }
    if(i==2){
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

var n=100;
var z=0;
var prvnum=0;
for(var i=0;z<n;i++){
    var r=prime(i);
    if(r===true){
        prvnum=prvnum-i;
        z++;
        console.log(i+" is Prime It is "+z+"th Element and Distance is : "+-prvnum);
        prvnum=i;
    }
}