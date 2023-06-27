// Diseñar un CRUD para las entidades Videojuego - Personaje utilizando JS
import inquirer from 'inquirer';
const readlineSync = require('readline-sync');



class Videojuego {
    constructor(id, nombreVideojuego, disponibilidad, fechaCreacion, precio) {
        this.id = id
        this.nombreVideojuego = nombreVideojuego
        this.disponibilidad = disponibilidad
        this.fechaCreacion = fechaCreacion
        this.precio = precio
    }
}

function main() {
    seleccionarOpcion()
}

async function createVideoJuego() {
    const videoJuego = await inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'id',
                    message: 'ID DEL VIDEOJUEGO'
                },
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'NOMBRE DEL VIDEOJUEGO'
                },
                {
                    type: 'rawlist',
                    name: 'disponibilidad',
                    message: 'ESTA DISPONIBLE?',
                    choices: ['SI', 'NO']
                },
                {
                    type: 'input',
                    name: 'fechaCreacion',
                    message: 'FECHA DE INGRESO'
                },
                {
                    type: 'input',
                    name: 'precio',
                    message: 'PRECIO'
                }
            ]);
    console.log(videoJuego)
}

function seleccionarOpcion() {
    //Creamos el menu para las sentencias CRUD1
    console.log("********BIENVENIDO*********")
    const opciones = ["CREATE", "READ", "UPDATE", "DELETE"]
    opciones.forEach(function (value, index) {
        console.log(index + 1, value)
    })
    const valor = readlineSync.question('Ingresa un valor: ');
    console.log('Valor ingresado:', valor);
}

main()
