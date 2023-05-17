var receta = {}

receta.nombre="Sandwich";
receta.ingredientes=[];

receta.ingredientes.push({nombre: "Pan" ,cantidad: 2,})
receta.ingredientes.push({nombre: "Queso" ,cantidad: 1,})

console.log (receta);
console.log (receta.ingredientes[0].nombre);

var sumCantidad = 0;

for (var i=0; i < receta.ingredientes.length; i++) {
    sumCantidad += (receta.ingredientes[i].cantidad);
}

console.log(sumCantidad);