// escribe la función max acá

function max(...[x]){
    let maxx="";
    let l=x.length;
    if (l==0){
        maxx="undefined";
    }
    else {
        maxx = x[0];
        for (let i=0;i<l;i++){
            if (maxx < x[i]) {
                maxx = x[i];
            }
        }
    }
    return maxx;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined