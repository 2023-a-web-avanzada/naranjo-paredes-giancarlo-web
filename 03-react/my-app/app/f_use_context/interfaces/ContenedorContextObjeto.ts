import {Dispatch, SetStateAction} from "react";
// f_use_context/interfaces/ContenedorContextObjeto.ts
export interface ContenedorContextObjeto {
    nombreUsuario:string;
    setNombreUsuario: Dispatch<SetStateAction<string>>;
}
