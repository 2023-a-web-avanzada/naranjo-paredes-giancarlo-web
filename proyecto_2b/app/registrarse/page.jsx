'use client'
import React from "react";
import Link from "next/link";

import {useState} from "react";
import {useRouter} from "next/navigation";


export default function Registrarse() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [usuario, setUsuario] = useState("");
    const [cedula, setCedula] = useState("");
    const [telefono, setTelefono] = useState("");
    const [contrasena, setContrasena] = useState("");

    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        //Comprobar que todos los campos del registro esten completados
        //Llamado de creacion a la API creada
        try {
            const res = await fetch('http://localhost:3000/api/usuario', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    nombre,
                    apellido,
                    usuario,
                    cedula,
                    telefono,
                    contrasena
                })
            })

            if (res.ok) {
                router.push('/')
            } else {
                throw new Error("Fallo en crear usuario")
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="container min-h-screen flex flex-col items-center justify-center text-white">
            <div>
                <div className="flex items-center">
                    <h1 className="text-white mr-4">CREA TU CUENTA</h1>
                    <img
                        src="https://w7.pngwing.com/pngs/322/286/png-transparent-joystick-game-controllers-video-game-computer-icons-portal-game-electronics-video-game.png"
                        alt="Imagen de Registro"
                        width="150"
                        className="border-4 border-white rounded-full"
                    />
                </div>
            </div>
            <div className="mt-5">
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto text-center flex flex-wrap gap-10 text-white">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center ">
                            <label htmlFor="nombre"
                                   className="w-1/3 bg-gradient-to-br from-black via-green-800 to-green-900 m-2 rounded-3">Nombre:</label>
                            <input

                                onChange={(e) => setNombre(e.target.value)}
                                value={nombre}

                                type="text" id="nombre" name="nombre" required
                                className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className=" flex items-center">
                            <label htmlFor="apellido"
                                   className="w-1/3 bg-gradient-to-br from-black via-green-800 to-green-900 m-2 rounded-3">Apellido:</label>
                            <input

                                onChange={(e) => setApellido(e.target.value)}
                                value={apellido}

                                type="text" id="apellido" name="apellido" required
                                className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className=" flex items-center">
                            <label htmlFor="usuario"
                                   className="w-1/3 bg-gradient-to-br from-black via-green-800 to-green-900 m-2 rounded-3">Usuario:</label>
                            <input
                                onChange={(e) => setUsuario(e.target.value)}
                                value={usuario}
                                type="text" id="usuario" name="usuario" required
                                className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className=" flex items-center">
                            <label htmlFor="cedula"
                                   className="w-1/3 bg-gradient-to-br from-black via-green-800 to-green-900 m-2 rounded-3">Cédula:</label>
                            <input
                                onChange={(e) => setCedula(e.target.value)}
                                value={cedula}
                                type="number" id="cedula" name="cedula" required
                                className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"
                                inputMode="numeric"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center">
                            <label htmlFor="telefono"
                                   className="w-1/3 bg-gradient-to-br from-black via-green-800 to-green-900 m-2 rounded-3">Teléfono:</label>
                            <input
                                onChange={(e) => setContrasena(e.target.value)}
                                value={contrasena}
                                type="number" id="telefono" name="telefono" required
                                className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"
                                inputMode="numeric"/>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className=" flex items-center">
                            <label htmlFor="contrasena"
                                   className="w-1/3 bg-gradient-to-br from-black via-green-800 to-green-900 m-2 rounded-3">Contraseña:</label>
                            <input type="password" id="contrasena" name="contrasena" required
                                   className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className=" flex items-center">
                            <label htmlFor="confirmar-contrasena"
                                   className="w-1/3 bg-gradient-to-br from-black via-green-800 to-green-900 m-2 rounded-3">Confirmar
                                Contraseña:</label>
                            <input
                                type="password"
                                id="confirmar-contrasena"
                                name="confirmar-contrasena"
                                required
                                className="w-3/4 bg-gray-400 rounded-1 focus:bg-white text-black py-2 p-2"
                            />
                        </div>
                    </div>
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
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}