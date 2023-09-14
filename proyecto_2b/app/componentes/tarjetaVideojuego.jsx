import React from 'react';


const TarjetaVideoJuego = ({imagen, titulo, descripcion, precio}) => {
    imagen = "https://media.vandal.net/m/15190/2013479429_1.jpg"
    titulo = "GTA V"
    descripcion = "Se trata de una aventura de acción de mundo abierto con multitud de misiones en la que encarnamos a tres personajes distintos: Trevor, Michael y Franklin. Además, " +
        "cuenta con GTA Online, el modo multijugador en lína de GTA 5"
    precio = 50
    return (
        <>
            <div
                className="flex border border-gray-300 rounded-lg p-4 m-4 bg-gradient-to-br from-black via-green-800 to-green-900">
                <div className="flex-shrink-0 m-auto">
                    <img src={imagen} alt={titulo} className="w-32 h-32 rounded-md"/>
                </div>
                <div className="ml-4 flex-grow">
                    <h2 className="text-xl font-semibold text-white">{titulo}</h2>
                    <p className="text-white p-1">{descripcion}</p>
                    <a href="/resenas" className="hover:underline text-white">RESEÑAS</a>
                </div>
                <div className="flex flex-col items-center m-auto">
                    <h3 className="text-white">PRECIO</h3>
                    <p className="text-xl font-semibold text-white">${precio}</p>
                    <button
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none">Comprar
                    </button>
                </div>
            </div>
        </>
    );
};

export default TarjetaVideoJuego;
