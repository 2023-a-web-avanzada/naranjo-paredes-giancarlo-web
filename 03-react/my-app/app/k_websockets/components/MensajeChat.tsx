import {MensajeChatProps, Posicion} from "@/app/k_websockets/types/mensaje-chat-props";

export default function MensajeChat(props: MensajeChatProps) {
    const {nombre, mensaje, posicion} = props
    return (<>
        {
            posicion === Posicion.D ?
                <p className='text-right'>
                    {mensaje}<strong>:{nombre}</strong></p> :
                <p className='text-left'>
                    <strong>{nombre}:</strong>{mensaje}
                </p>
        }
    </>)
}