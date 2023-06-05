// 08-promesas.js
const fs = require('fs');
/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
* */
function leerArchivo(path) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path, // Nombre o path del archivo
                'utf-8', // codificacion
                (errorLectura, contenido) => {
                    if (errorLectura) {
                        console.error(errorLectura);
                        reject('Error leyendo primer archivo');
                    } else {
                        resolve(contenido)
                    }
                }
            );
        }
    ); //
}

function escribirArchivo(path, nuevoContenido) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                nuevoContenido,
                (errorEscritura) => {
                    if (errorEscritura) {
                        console.error(errorEscritura);
                        reject('Error escribiendo nuevo archivo');
                    } else {
                        resolve('Completado');
                    }
                }
            );
        }
    ); //
}


function ejercicio(
    pathArchivoUno,
    pathArchivoDos,
    pathArchivoNuevo
){
    let contenidoTotal = '';
    leerArchivo(pathArchivoUno)
        .then(
            (contenidoPrimerArchivo)=>{
                contenidoTotal = contenidoTotal + contenidoPrimerArchivo;
                return leerArchivo(pathArchivoDos);
            }
        )
        .then(
            (contenidoSegundoArchivo)=>{
                contenidoTotal = contenidoTotal + contenidoSegundoArchivo
                return escribirArchivo(pathArchivoNuevo, contenidoTotal);
            }
        )
        .catch(error => console.error(error))
}

const pathUno = '01-variables.js';
const pathDos = '06-ejemplo.txt';
const pathTres = '06-ejemplo-respuesta.txt';
ejercicio(pathUno, pathDos, pathTres);

// ASYNC AWAIT
// REGLAS:
// 1) Estar dentro de una funcion (nombrada o anonima)
// 2) AGREGAR la palabra 'async' antes de la declaracion
//    de la funcion
// 3) AGREGAR la palabra 'await' antes de la declaracion
//    de una promesa
// const a = async function(){}
// const a = async ()=>{}
async function ejercicioConAwait(){
    const pathUno = '01-variables.js';
    const pathDos = '06-ejemplo.txt';
    const pathTres = '06-ejemplo-respuesta.txt';
    try {
        const contenidoUno = await leerArchivo(pathUno);
        const contenidoDos = await leerArchivo(pathDos);
        const contenidoTotal = contenidoUno + contenidoDos;
        await escribirArchivo(pathTres, contenidoTotal);
    } catch (error) {
        console.error(error);
    }
}























