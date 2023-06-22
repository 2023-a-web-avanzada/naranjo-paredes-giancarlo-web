// 02-interfaces
export class A implements B {
    edad = 1;
    nombre = 'a';
}

export interface B {
    nombre: string; // nombre: string,
    edad: number; // edad: number,
}

export type C = {
    nombre: string; // nombre: string,
    edad: number; // edad: number,
}

type Usuario =  {
    nombre: string;
    apellido: string;
    edad?: number | undefined; //  opcional
    sueldo?: number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT'; // opcional
    // calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual no reciba parametros, 'AP' 'AF' 'AT'
}