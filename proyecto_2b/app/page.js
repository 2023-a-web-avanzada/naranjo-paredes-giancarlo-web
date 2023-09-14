'use client';
import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import {useRouter} from "next/navigation";

const getUsuarios = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/usuario", {
            cache: "no-store",
        })
        if (!res.ok) {
            throw new Error("Fallo al obtener los usuarios")
        }
        return res.json()
    } catch (error) {
        console.log("Error al cargar los usuarios", error)
    }
}
export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realiza la validación del usuario y contraseña con los datos de la API
        const data = await getUsuarios(); // Debes implementar la función getUsuarios
        const usuarioValido = data.usuarios.find(
            (usuario) => usuario.usuario === username && usuario.contrasena === password
        );

        if (usuarioValido) {
            // Usuario válido, redirige a la página principal
            router.push(`paginaPrincipal/${usuarioValido._id}`);
        } else {
            // Usuario no válido, muestra un mensaje de error
            alert('Usuario o contraseña incorrectos');
        }
    };
    return (
        <>
            <div className="container mx-auto mt-5 flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md mx-auto">
                    <div className="text-center">
                        <img
                            src="https://w7.pngwing.com/pngs/322/286/png-transparent-joystick-game-controllers-video-game-computer-icons-portal-game-electronics-video-game.png"
                            alt="Logo"
                            className="w-24 mx-auto rounded-full"
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-white">INICIAR SESIÓN</h1>
                    </div>


                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div className="flex items-center border rounded">

                                <FontAwesomeIcon icon={faUser} className="w-8 m-2"/>

                                <input
                                    type="text"
                                    className="w-full py-2 px-4 focus:outline-none mr-2"
                                    placeholder="Usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center border rounded">
                                <FontAwesomeIcon icon={faLock} className="w-8 m-2"/>
                                <input
                                    type="password"
                                    className="w-full py-2 px-4 focus:outline-none mr-2"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
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
                                className="w-full bg-gradient-to-br from-black via-green-800 to-green-900 text-white py-2 px-2 rounded focus:outline-none custom-button"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col items-start">
                        <a href="/registrarse" className="text-white hover:underline">Registrarse</a>
                        <a href="#" className="text-white hover:underline mt-3">¿Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </div>
        </>

    );
}