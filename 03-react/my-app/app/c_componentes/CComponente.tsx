import {useState} from "react";

export type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}
export default function CComponente(
    props: PropiedadesComponente
) {
    // const url = props.url
    // const iteraciones = props.iteraciones
    // const mostrar = props.mostrar
    const {url, iteraciones, mostrar} = props;
    const arreglo = [0, 1]
    // const numeroUno = arreglo[0]
    // const numeroDos = arreglo[1]
    const [numeroUno, numeroDos] = arreglo
    const contenidoAdicional: () => (JSX.Element) = () => {
        if (mostrar) {
            return <p>Mostrar</p>
        }
        contenidoAdicional
        return <p>Ocultar</p>
    }
    const objeto = {}

    // useState
    const [iteracionLocal, setIteracionLocal] = useState(
        iteraciones// 1, // valor de la variable
    ) // click al boton, cambiar el classname de bg-yellow-500
    //  a bg-red-500 y cuando vuelva a dar click de nuevo cambiar a bg-yellow y asi
    // sucesivamente
    return (
        <div className="border border-solid border-black p-3 m-2">
            <a target="_blank"
               href={url}>
                IR A URL
            </a>
            <p className="bg-yellow-500">Iteracion: {iteraciones} {iteracionLocal}</p>
            <p>Mostrar: {mostrar}</p>
            {contenidoAdicional()}
            {mostrar && <p>Mostrar Rapido</p>}
            <button className="border border-solid border-black bg-blue-500" onClick={
                (event) => {
                    setIteracionLocal(iteracionLocal + 1)
                    // setIteracionLocal(0)
                    console.log(event);
                }
            }> Aumentar
            </button>
        </div>
    )
}