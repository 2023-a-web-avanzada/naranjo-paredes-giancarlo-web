// EComponenteC.tsx
import {useContext} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";

export default function EComponenteC(){
    const contenedorContexto = useContext(ContenedorContext);
    return (
        <>
            Componente C
            <p>{contenedorContexto.nombreUsuario}</p>
            <button onClick={ e => {
                e.preventDefault();
                contenedorContexto.setNombreUsuario('CompC')
            }}>
                Actualizar
            </button>
        </>
    )
}

