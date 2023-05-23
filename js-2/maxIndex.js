// escribe la función maxIndex acá
function maxIndex(...[x]){
    let maxIndexx="";
    let l=x.length;
    if (l==0){
        maxIndexx="-1";
    }
    else {
        maxIndexx = 0;
        for (let i=0;i<l;i++){
            if (x[maxIndexx] < x[i]) {
                maxIndexx = i;
            }
        }
    }
    return maxIndexx;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 11, 5, 4])) // 0
console.log(maxIndex([])) // -1