var pedro = {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies : ["programar", "squash", "piano"],
}

console.log(pedro.edad);

pedro.estatura=1.8;

console.log(pedro);

delete pedro.activo;
console.log(pedro);

pedro.saluda=(function(){
    return "Hola, me llamo " + this.nombre;
});

console.log(pedro.saluda());

for (var i in pedro){
    if (pedro.hasOwnProperty(i)){
        console.log(i + ":"+pedro[i])
    }
}