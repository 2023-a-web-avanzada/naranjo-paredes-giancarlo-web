import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'

export default function NavPaginaPrincipal() {
    const id = "650200902a97e2845ad6e7dd"
    return (
        <div className="bg-gradient-to-br from-black via-green-800 to-green-900 p-4 flex items-center justify-between">
            <div className="flex items-center">
                <img
                    src="https://w7.pngwing.com/pngs/322/286/png-transparent-joystick-game-controllers-video-game-computer-icons-portal-game-electronics-video-game.png"
                    alt="Logo"
                    className="w-24 rounded-full"
                />
                <div className="flex items-center">
                    <ul className="flex space-x-4 mt-3">
                        <li>
                            <a href={`/paginaPrincipal/${id}`} className="text-white"
                               style={{textDecoration: 'none', fontSize: '16px', fontWeight: 'bold'}}>
                                Juegos
                            </a>
                        </li>

                        <li>
                            <a href={`/biblioteca/${id}`} className="text-white"
                               style={{textDecoration: 'none', fontSize: '16px', fontWeight: 'bold'}}>
                                Biblioteca
                            </a>
                        </li>
                    </ul>
                    <div className="ml-4">
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="border-3 border-gray-300 px-20 pl-2 py-2 rounded-3 "
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center mr-14">
                <div className="flex items-center justify-end space-x-4">
                    <FontAwesomeIcon icon={faUser} className="w-8 mr-1"/>
                    <a href={`/perfil/${id}`} className="text-white"
                       style={{textDecoration: 'none', fontSize: '16px', fontWeight: 'bold'}}>Perfil</a>
                </div>
            </div>
        </div>
    )
}