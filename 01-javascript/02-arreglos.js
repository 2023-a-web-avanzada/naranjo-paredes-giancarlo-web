// 02-arreglos.js
let arreglo = [6, 7, 8, 9, 10];
arreglo = 1;
arreglo = true
arreglo = undefined
arreglo = null
arreglo = {}
arreglo = [true, 1, 1.1, "Giancarlo", "Naranjo", undefined,
    null, {}, [1, 2]]

arreglo = [5, 6, 7, 8, 9]

// for of
for (let numero of arreglo) {// Valores
    console.log('numero', numero)
}

//for in
for (let indice in arreglo) {// Indices
    console.log('indices', indice)
}
// Anadir al final un elemento
arreglo.push(11)
// Eliminar al final un elemento
arreglo.pop()
// Anadir al principio del arreglo
arreglo.unshift(4)
//splice(indice donde empezar, numero elementos eliminados,
//items o agregar)
//EJ: arreglos.splice(0

/*
0 // indice, - Requerido
3 // eliminar 3 elementos - Requerido (tambien puedo borrar 0 elementos)
1,2,3,4,5,6 // Agregar los elementos del 1-6
);
*/
arreglo.splice(0, 0, 1, 2, 3)
console.log(arreglo)
const indiceNuevo = arreglo.indexOf(9)



