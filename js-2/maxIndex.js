// escribe la función maxIndex acá
function maxIndex(...[x]){
    return x.findIndex(e => e===Math.max(...x));
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1