//05- destructiuracion.js

const giancarlo = {
    nombre: "Giancarlo"
};

const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};

const giancarloCarolina = {
    ...carolina,    //  1 el orden es importante para propiedades que se repiten
    ...giancarlo,  //  El ultimo reemplaza a las anteriores
}

console.log('giancarloCarolina', giancarloCarolina)

// Destructuracion de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno, // El orden importa
    ...arregloDos,
]; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('superArreglo', superArreglo);


