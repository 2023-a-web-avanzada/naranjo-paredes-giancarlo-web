'use client'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function TarjetaJugador(props) {
    const usuario = props.objetoProp
    const [nuevoNombre, setNuevoNombre] = useState(usuario.nombre)
    const [nuevoNick, setNuevoNick] = useState(usuario.usuario)

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('AQUI')
        try {
            const res = await fetch(`http://localhost/api/usuario/${usuario._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nuevoNombre, nuevoNick})
            })
            if (!res.ok) {
                throw new Error('Error al actualizar')
            }
            router.push(`paginaPrincipal/${usuario._id}`);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="m-3 shadow-md rounded-md p-4"
                 style={{background: 'linear-gradient(0deg, #088000, #315B47)'}}>
                <div>
                    <img
                        src="https://psicogamer.com/articulos/el-avatar-como-proyeccion-del-yo/Imagen2.jpg"
                        alt="Imagen del Jugador"
                        className="w-48 h-48 rounded-full mx-auto mb-4"
                    />
                </div>
                <div className="mt-5">
                    <form onSubmit={handleSubmit} className="text-center flex flex-wrap gap-10 text-white">
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center">
                                <label
                                    htmlFor="nombre"
                                    className="w-1/3 m-2 rounded-3 border border-white py-1.5"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    required
                                    className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"
                                    onChange={(e) => setNuevoNombre(e.target.value)}
                                    value={nuevoNombre}


                                />
                            </div>

                        </div>
                        <div className="w-full md:w-1/2">
                            <div className=" flex items-center">
                                <label htmlFor="nick"
                                       className="w-1/3 m-2 rounded-3 border border-white py-1.5"
                                >Nick</label>
                                <input type="text" id="nick" name="apellido" required
                                       className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"
                                       onChange={(e) => setNuevoNick(e.target.value)}
                                       value={nuevoNick}
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className=" flex items-center">
                                <label htmlFor="id_jugador"
                                       className="w-1/3 m-2 rounded-3 border border-white py-1.5"
                                >ID Jugador</label>
                                <input type="text" id="id_jugador" name="usuario" required
                                       className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2
                                       "
                                       value={usuario._id}
                                       readOnly/>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className=" flex items-center">
                                <label htmlFor="pais"
                                       className="w-1/3 m-2 rounded-3 border border-white py-1.5"
                                >Pais</label>
                                <input type="text" id="pais" name="cedula" required
                                       className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"
                                       inputMode="text"
                                       value={"Ecuador"}
                                       readOnly
                                />
                            </div>
                        </div>

                    </form>
                    <div className="mt-5 mb-5 text-center">
                        <style>
                            {`
                              .custom-button:hover {
                                background: linear-gradient(to bottom right, #000000, #008000);
                                /* Ajusta los colores de degradado según tus preferencias */
                              }
                            `}
                        </style>

                        <button
                            type="submit"
                            className="bg-gradient-to-br from-black via-green-800 to-green-900 text-white py-2 px-4 rounded focus:outline-none inline-block custom-button"
                        >
                            Actualizar
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <a href="#" className="block hover:underline text-white font-bold"
                           style={{textDecoration: 'none'}}>
                            Ver logros
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}