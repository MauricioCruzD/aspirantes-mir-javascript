// escribe la función sum acá
function sum (...[x]){
    var summ = 0;
    for (var i=0; i <x.length; i++){
        summ +=x[i];
    }
    return summ;    
}


console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0