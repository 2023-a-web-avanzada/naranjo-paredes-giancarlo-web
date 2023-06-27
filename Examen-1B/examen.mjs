// Diseñar un CRUD para las entidades Videojuego - Personaje utilizando JS
import inquirer from 'inquirer';
import readlineSync from 'readline-sync';
import fs from "fs";

let arregloVideoJuegos = []
let arregloPersonajes = []

class Videojuego {
    constructor(id, nombreVideojuego, disponibilidad, fechaCreacion, precio, personajes) {
        this.id = id
        this.nombreVideojuego = nombreVideojuego
        this.disponibilidad = disponibilidad
        this.fechaCreacion = fechaCreacion
        this.precio = precio
        this.personajes = crearPersonajesSimulacion(this.id)
    }
}

function seleccionarOpcion() {
    //Creamos el menu para las sentencias CRUD1
    console.log("********BIENVENIDO*********")
    const opciones = ["CREATE", "READ", "UPDATE", "DELETE"]
    opciones.forEach(function (value, index) {
        console.log(index + 1, value)
    })
    const opcion = readlineSync.question('OPCION > ');
    const intOpcion = parseInt(opcion)
    switch (intOpcion) {
        case 1:
            createVideoJuego()
            break;
        case 2:
            readVideoJuego()
            break;
        case 3:
            updateVideojuego()
            break;
        case 4:
            deleteVideoJuego()
            break;
    }
}

async function createVideoJuego() {
    console.log("*************INGRESE LA INFORMACION DEL NUEVO JUEGO*************")
    let afirmacion;
    do {
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
                    },
                    {
                        type: 'rawlist',
                        name: 'afirmacion',
                        message: 'AGREGAR OTRO VIDEOJUEGO?',
                        choices: ['SI', 'NO']
                    }
                ]);
        let nuevoVideojuego = new Videojuego(
            videoJuego["id"],
            videoJuego["nombre"],
            videoJuego["disponibilidad"],
            videoJuego["fechaCreacion"],
            videoJuego["precio"]
        )
        console.log('VIDEOJUEGO AGREGADO CON EXITO')
        //Creacion de videojuego
        arregloVideoJuegos.push(nuevoVideojuego)
        afirmacion = videoJuego["afirmacion"]
    } while (afirmacion === "SI")
    //Colocar el arreglo en un archivo txt
    escribirEntxt(arregloVideoJuegos)
}

function readVideoJuego() {
    fs.readFile(
        './simulacionBD.txt', // Nombre o path del archivo
        'utf-8',    // codificacion
        (errorLecturaPrimerArchivo, contenido) => {
            if (errorLecturaPrimerArchivo) {
                console.error(errorLecturaPrimerArchivo);
                throw new Error('Error leyendo el primer archivo');
            } else {
                // IMPRESION DEL PRIMER ARCHIVO
                console.log(contenido);
            }
        }
    );

}

function updateVideojuego() {
    const idVideojuego = readlineSync.question("ID DEL VIDEOJUEGO A ACTUALIZAR > ")
    const id = parseInt(idVideojuego)
    fs.readFile('simulacionBD.txt', 'utf8', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }
        let arreglo = []
        arreglo = JSON.parse(data)
        for (let videojuego of arreglo) {
            if (videojuego.id === idVideojuego) {
                mostrarCamposDeModiciaciones(videojuego)
                escribirEntxt(arreglo)
            } else {
                console.log('NO EXISTE ESE VIDEOJUEGO')
            }
        }
    });
}

function deleteVideoJuego() {
    const idVideojuego = readlineSync.question("ID DEL VIDEOJUEGO A ELIMINAR > ")
    const id = parseInt(idVideojuego)
    fs.readFile('simulacionBD.txt', 'utf8', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }
        let arreglo = []
        arreglo = JSON.parse(data)
        for (let videojuego of arreglo) {
            if (videojuego.id === idVideojuego) {
                const nuevoArreglo = arreglo.filter(objeto => objeto !== videojuego);
                console.log('VIDEOJUEGO ELIMINADO CON EXITO')
                escribirEntxt(nuevoArreglo)
            } else {
                console.log('NO EXISTE ESE VIDEOJUEGO')
            }
        }
    });
}

function mostrarCamposDeModiciaciones(videojuego) {
    console.log("ESCOGER ATRIBUTO A MODIFICAR")
    let atributosVideojuego = ['id', 'nombreVideojuego', 'disponibilidad', 'fechaCreacion', 'precio']
    atributosVideojuego.forEach(function (value, index) {
        console.log(index + 1, value)
    })
    const atributo = readlineSync.question('OPCION > ');
    const intOpcion = parseInt(atributo)
    switch (intOpcion) {
        case 1:
            videojuego['id'] = readlineSync.question('ID > ')
            console.log(videojuego)
            break;
        case 2:
            videojuego['nombre'] = readlineSync.question('nombreVideojuego > ')

            break;
        case 3:
            videojuego['disponibilidad'] = readlineSync.question('disponibilidad > ')

            break;
        case 4:
            videojuego['fechaCreacion'] = readlineSync.question('fechaCreacion > ')

            break;
        case 5:
            videojuego['precio'] = readlineSync.question('precio > ')
            break;
    }
}

function escribirEntxt(arregloVideoJuegos) {
    //Recorrer el arreglo de objeto de videojuegos y cada elementos colocarlo en el txt
    const arregloGuardado = JSON.stringify(arregloVideoJuegos) // Arreglos Objetos
    // CREACION DEL TERCER ARCHIVO
    fs.writeFile(
        './simulacionBD.txt',
        arregloGuardado, 'utf8',
        (errorEscritura) => {
            if (errorEscritura) {
                console.error(errorEscritura);
            }
            console.log("EXITO AL CREAR EL VIDEOJUEGO")
        }
    );
}

class Personaje {
    constructor(id, fk, nombrePersonaje, nivel, habilidades, especie) {
        this.id = id
        this.fk = fk
        this.nombrePersonaje = nombrePersonaje
        this.nivel = nivel
        this.habilidades = habilidades
        this.especie = especie
    }
}

function seleccionarOpcionPersonajes() {
    //Creamos el menu para las sentencias CRUD1
    console.log("********BIENVENIDO*********")
    const opciones = ["CREATE", "READ", "UPDATE", "DELETE"]
    opciones.forEach(function (value, index) {
        console.log(index + 1, value)
    })
    const opcion = readlineSync.question('OPCION > ');
    const intOpcion = parseInt(opcion)

    switch (intOpcion) {
        case 1:
            crearPersonajesSimulacion(0)
            break;
        case 2:
            readPersonajes()
            break;
        case 3:
            updatePersonaje()
            break;
        case 4:
            deletePersonaje()
            break;
    }


}

function crearPersonajesSimulacion(fk) {
    let bandera = true

    do {
        console.log('AGREGAR PERSONAJES AL VIDEOJUEGO')
        const idPersonaje = readlineSync.question('ID > ')
        const nombrePersonaje = readlineSync.question('NOMBRE  > ')
        const nivel = readlineSync.question('NIVEL > ')
        const habilidad = readlineSync.question('HABILIDAD > ')
        const especie = readlineSync.question('ESPECIE > ')

        let personaje = new Personaje(
            idPersonaje,
            fk,
            nombrePersonaje,
            nivel,
            habilidad,
            especie
        )
        arregloPersonajes.push(personaje)
        let afirmacion = readlineSync.question('AGREGAR OTRO PERSONAJE? Y/N > ')
        bandera = afirmacion.toString() === "Y";
    } while (bandera)
    escribirEntxtPersonaje(arregloPersonajes)
    return arregloPersonajes
}

function readPersonajes() {
    fs.readFile(
        './personajes.txt', // Nombre o path del archivo
        'utf-8',    // codificacion
        (errorLecturaPrimerArchivo, contenido) => {
            if (errorLecturaPrimerArchivo) {
                console.error(errorLecturaPrimerArchivo);
                throw new Error('Error leyendo el primer archivo');
            } else {
                // IMPRESION DEL PRIMER ARCHIVO
                console.log(contenido);
            }
        }
    );
}

function updatePersonaje() {
    const idPersonaje = readlineSync.question("ID DEL PERSONAJE A ACTUALIZAR > ")
    const id = parseInt(idPersonaje)
    fs.readFile('personajes.txt', 'utf8', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }
        let arreglo = []
        arreglo = JSON.parse(data)
        for (let personaje of arreglo) {
            if (personaje.id === idPersonaje) {
                mostrarCamposDeModiciacionesPersonaje(personaje)
                escribirEntxt(arreglo)
            } else {
                console.log('NO EXISTE ESE VIDEOJUEGO')
            }
        }
    });
}

function deletePersonaje() {
    const idPersonaje = readlineSync.question("ID DEL PERSONAJE A ELIMINAR > ")
    const id = parseInt(idPersonaje)
    fs.readFile('personajes.txt', 'utf8', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }
        let arreglo = []
        arreglo = JSON.parse(data)
        for (let personaje of arreglo) {
            if (personaje.id === idPersonaje) {
                const nuevoArreglo = arreglo.filter(objeto => objeto !== personaje);
                console.log('PERSONAJE ELIMINADO CON EXITO')
                escribirEntxt(nuevoArreglo)
            } else {
                console.log('NO EXISTE ESE PERSONAJE')
            }
        }
    });

}

function mostrarCamposDeModiciacionesPersonaje(personaje) {
    console.log("ESCOGER ATRIBUTO A MODIFICAR")
    let atributosPersonaje = ['id', 'nombreVideojuego', 'disponibilidad', 'fechaCreacion', 'precio']
    atributosPersonaje.forEach(function (value, index) {
        console.log(index + 1, value)
    })
    const atributo = readlineSync.question('OPCION > ');
    const intOpcion = parseInt(atributo)
    switch (intOpcion) {
        case 1:
            personaje['id'] = readlineSync.question('ID > ')
            console.log(personaje)
            break;
        case 2:
            personaje['nombrePersonaje'] = readlineSync.question('nombrePersonaje > ')

            break;
        case 3:
            personaje['nivel'] = readlineSync.question('nivel > ')

            break;
        case 4:
            personaje['habilidades'] = readlineSync.question('habilidades > ')

            break;
        case 5:
            personaje['especie'] = readlineSync.question('especie > ')
            break;
    }

}

function escribirEntxtPersonaje(arregloPersonajes) {

    //Recorrer el arreglo de objeto de videojuegos y cada elementos colocarlo en el txt
    const arregloGuardado = JSON.stringify(arregloPersonajes) // Arreglos Objetos
    // CREACION DEL TERCER ARCHIVO
    fs.writeFile(
        './personajes.txt',
        arregloGuardado, 'utf8',
        (errorEscritura) => {
            if (errorEscritura) {
                console.error(errorEscritura);
            }
            console.log("EXITO AL CREAR PERSONAJES EN EL ARCHIVO")
        }
    );

}

function escogerBD() {
    //Creamos el menu para las sentencias CRUD1
    console.log("********BIENVENIDO*********")
    const opciones = ["VIDEOJUEGO" , "PERSONAJE"]
    opciones.forEach(function (value, index) {
        console.log(index + 1, value)
    })
    let bd = readlineSync.question('ESCOGA LA BD A MODIFICAR > ')
    let opcion = parseInt(bd)
    switch (opcion) {
        case 1:
            console.log('1. BASE DE DATOS VIDEOJUEGOS')
            seleccionarOpcion()
            break;
        case 2:
            console.log('2. BASE DE DATOS PERSONAJES')
            seleccionarOpcionPersonajes()
            break;

    }
}

function main() {
    escogerBD()
}

main()