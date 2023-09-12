'use client';

import { useState } from "react";
import {useRouter} from "next/navigation"

export default function EditVideogameForm({ id, titulo, descripcion }) {

    const [nuevoTitulo, setNewTitulo] = useState(titulo)
    const [nuevaDescripcion, setDescripcion] = useState(descripcion)

    const router = useRouter()

    const handelSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/videogames/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ nuevoTitulo, nuevaDescripcion })

            })
            if(!res.ok){
                throw new Error('Failed to update videogame')
            }
            router.refresh();
            router.push("/")
        } catch (error) {

            console.log(error)
        }
    }


    return (
        <>
            <form
                onSubmit={handelSubmit}
                className="flex flex-col gap-3">
                <input

                    onChange={e => setNewTitulo(e.target.value)}
                    value={nuevoTitulo}

                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Titulo videojuego">
                </input>

                <input

                    onChange={e => setDescripcion(e.target.value)}
                    value={nuevaDescripcion}

                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Descripcion videojuego">
                </input>

                <button className="bg-green-600 font-bold
                text-white py-3 px-6 w-fit">
                    Actualizar videojuego
                </button>
            </form>
        </>
    )
}