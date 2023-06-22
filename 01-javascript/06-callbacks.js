const fs = require('fs');   // file system
                            // Importar modulo fs

console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8',    // codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('SEGUNDO');
        if (errorLecturaPrimerArchivo) {
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo el primer archivo');
        } else {
            // IMPRESION DEL PRIMER ARCHIVO
            console.log(contenidoPrimerArchivo);

            fs.readFile(
                './01-variables.js',    // Nombre o path del archivo
                'utf-8',    // codificacion
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => {
                    if (errorLecturaSegundoArchivo) {
                        console.error(errorLecturaPrimerArchivo);
                        throw new Error('Error leyendo el segundo archivo');
                    } else {
                        // IMPRESION DEL SEGUNDO ARCHIVO
                        console.log(contenidoSegundoArchivo);

                        // CREACION DEL TERCER ARCHIVO
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            contenidoPrimerArchivo + '\n' + contenidoSegundoArchivo,
                            (errorEscritura) => {

                            }
                        );
                    }
                }
            );
        }
    }
);
console.log('TERCERO');