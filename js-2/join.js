///Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos.
function join (...[x]){
    return [x].toString().replaceAll(','," ");
}

console.log(join([1, 3, 2]))
console.log(join([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(join([])) // -1