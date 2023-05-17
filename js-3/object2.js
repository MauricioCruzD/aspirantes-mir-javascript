var persona = {
    nombre : "Mauricio Cruz",
    edad : 42,
    ciudad: "Jamundi",
    profesion : "Ingeniero de Sistemas",
}

console.log(persona);

function presentacion (p){
    return "Mi nombre es: "+p.nombre + ", tengo: " + p.edad + " años y vivo en la ciudad de: " + p.ciudad
}
var mensaje = presentacion(persona);

console.log (mensaje);

persona.hobbies=["programar", "futbol", "juegos"];

console.log(persona.hobbies);

for (var i in persona){
    if (persona.hasOwnProperty(i)){
        console.log(i + ":"+persona[i])
    }
}