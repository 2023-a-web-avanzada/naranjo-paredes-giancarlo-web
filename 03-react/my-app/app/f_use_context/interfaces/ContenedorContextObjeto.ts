import {Dispatch, SetStateAction} from "react";

export interface ContenedorContextObjeto {
    nombreUsuario: string;
    setNombreUsuario: Dispatch<string>;
}