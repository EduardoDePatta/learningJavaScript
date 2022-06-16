const divisorsOf = Number();
divisors = [];
number = [];
arr = [];
arrDiv = [];
arrFinal = [];
for (var i = 0; i <= divisorsOf; i++){
    divisors.push(i);
    number.push(divisorsOf);
}
for (var j = 0; j <= divisorsOf; j++){
    arr.push(number[j] % divisors[j]);
}
arrDiv = arr.map(Math.sqrt);
for (var k = 1; k <= divisorsOf; k++){
    if (arrDiv[k]===0){
        arrFinal[k]=divisors[k];        
    }    
}
console.table(arrFinal)
