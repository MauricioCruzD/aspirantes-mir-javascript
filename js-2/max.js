// escribe la función max acá
function max(...[x]){
    return Math.max(...x)=="-Infinity"?"Undefined":Math.max(...x);
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined