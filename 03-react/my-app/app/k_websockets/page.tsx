'use client'
import io from "socket.io-client"
import {MensajeChatProps, Posicion} from "@/app/k_websockets/types/mensaje-chat-props";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import MensajeChat from "@/app/k_websockets/components/MensajeChat";
import {FormularioModelo} from "@/app/k_websockets/types/formulario-modelo";

const servidorWebsocket = 'http://localhost:11202';
const socket = io(servidorWebsocket);

export default function Page() {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as MensajeChatProps[]);
    const {
        control,
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm({
        defaultValues: {
            salaId: '',
            nombre: '',
            mensaje: '',
        },
        mode: 'all'
    })
    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });

            socket.on('escucharEventoHola', (data: { mensaje: string }) => {
                console.log('escucharEventoHola', data);
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: Posicion.I
                };
                setMensajes((mensajesAnteriores) => [
                    ...mensajesAnteriores,
                    nuevoMensaje]
                );
            });

            socket.on('escucharEventoUnirseSala', (data: { mensaje: string }) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.mensaje,
                    nombre: 'Sistema',
                    posicion: Posicion.I
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores,
                    nuevoMensaje]);
            });
            socket.on('escucharEventoMensajeSala', (data: FormularioModelo) => {
                const nuevoMensaje: MensajeChatProps = {
                    mensaje: data.salaId + ' - ' + data.mensaje,
                    nombre: data.nombre,
                    posicion: Posicion.I
                };
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores,
                    nuevoMensaje]);
                console.log('escucharEventoMensajeSala');
            });
        },
        []

        //Enviar el evento
        //Socket emite el evento (nombreDelEventoSocket, datos del evento,
        // respuesta del evento en front-end
        //socket.on escucha el evento (escucharEvento, data del evento Objeto (Servidor)
        //
    )

    const enviarEventoHola = () => {
        const mensaje = {mensaje: 'Adrian'}
        socket.emit(
            'hola', // Nombre Evento
            mensaje, //  Datos evento
            (datosEventoHola: { mensaje: string; }) => { // Callback o respuesta del evefnto
                console.log(datosEventoHola)
                //     const [arreglo, setArreglo] = useState([1,2])
                //      setArreglo( [1,2,3] )
                //      setArreglo( ([1,2])=> [ ...[1,2], 3 ])
                const nuevoMensaje: MensajeChatProps = {
                    ...mensaje,
                    nombre: 'Adrian',
                    posicion: Posicion.D
                };
                setMensajes(
                    (mensajesAnteriores) => [
                        ...mensajesAnteriores,
                        nuevoMensaje
                    ]);
            }
        )
    }
    const estaConectado = () => {
        if (isConnected) {
            return <span>Conectado :)</span>
        } else {
            return <span>Desconectado :(</span>
        }
    }

    const unirseSalaOEnviarMensajeSala = (data: FormularioModelo) => {
        if (data.mensaje === '') {
// unimos o la solo
            const dataEventoUnirseSala = {
                salald: data.salaId,
                nombre: data.nombre,
            };
            socket.emit(
                'unirsesala', // Nombre Evento
                dataEventoUnirseSala, // Datos evento
                () => { // Collback a respuesta del evento
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: 'Bienvenido a la sala ' + dataEventoUnirseSala.salald,
                        nombre: 'Sistema',
                        posicion: Posicion.I
                    };
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            );
        } else {
            // mandamos mensaje
            const dataEventoEnviarMensajeSala = {
                salald: data.salaId,
                nombre: data.nombre,
                mensaje: data.mensaje
            };
            socket.emit(
                'enviarMensaje', // Nombre Evento
                dataEventoEnviarMensajeSala,//Datos evento
                () => { // Callback o respuesta del evento
                    const nuevoMensaje: MensajeChatProps = {
                        mensaje: data.salaId + '-' + data.mensaje,
                        nombre: data.nombre,
                        posicion: Posicion.D
                    };
                    setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            );
        }
    }
    return (
        <>
            <h1>Websockets</h1>
            <p><strong>{estaConectado()}</strong></p>
            <button className={'btn btn-success'}
                    onClick={() => enviarEventoHola()}>
                Enviar evento hola
            </button>
            <div className="row">
                <div className="col-sm-6">
                    <form onSubmit={handleSubmit(unirseSalaOEnviarMensajeSala)}
                          className="m-2 p-4 border-2 border-pink-500"
                    >
                        <div className="mb-3">
                            <label htmlFor="salaId" className="form-label"> Sala ID</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="EJ: 1234"
                                   id="salald"
                                   {...register('salaId', {required: 'Ingresar salaid'})}
                                   aria-describedby="salaldHelp"/>
                            <div id="salaldHelp" className="form-text">
                                Ingresa tu idSala.
                            </div>
                            {errors.salaId &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.salaId.message}
                                </div>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombres</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="EJ: Adrien"
                                   id="nombre"
                                   {...register('nombre', {required: 'Nombre requerido'})}
                                   aria-describedby="nombreHelp"/>
                        </div>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nonbre.
                            {errors.nombre &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.nombre.message}
                                </div>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="EJ: Mensaje"
                                   id="mensaje"
                                   {...register('mensaje')}
                                   aria-describedby="mensajeHelp"/>
                            <div id="mensajeHelp" className="form-text">
                                Ingresa tu mensaje.
                            </div>
                            {errors.mensaje &&
                                <div className="alert alert-warning" role="alert">
                                    Tiene errores {errors.mensaje.message}
                                </div>
                            }
                        </div>
                        <button type="submit"
                                disabled={!isValid}
                                className="btn btn-warning">
                            Unirse sala
                        </button>
                        <button type="reset"
                                className="btn btn-danger">
                            Reset
                        </button>
                    </form>
                </div>
                <div className="col-sm-6 ">

                    <div className="border-2 border-sky-500 p-4 m-2">
                        {mensajes.map((mensaje, indice) =>
                            <MensajeChat key={indice}
                                         mensaje={mensaje.mensaje}
                                         nombre={mensaje.nombre}
                                         posicion={mensaje.posicion}
                            />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}