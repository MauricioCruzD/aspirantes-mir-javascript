// escribe la función suma acá
function sum(i){
    s = 0
    for (j=1;j<=i;j++){
        s = s + j
    }
    return s
}

// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120