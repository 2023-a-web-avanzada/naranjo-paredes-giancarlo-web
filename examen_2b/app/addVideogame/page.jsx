'use client';

import { headers } from "@/next.config";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddVideogame() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [nivelRecomendado, setNivelRecomendado] = useState(0)

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!titulo || !descripcion || !nivelRecomendado) {
            alert('Titulo, descripcion y nivel recomendado requeridos!!')
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/videogames', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ titulo, descripcion, nivelRecomendado })
            });
            if (res.ok) {
                router.push('/');
            } else {
                throw new Error('Failed to create a videogame')
            }
        } catch (error) {
            console.log(error)

        }
    };

    return (
        <>
            <form

                onSubmit={handleSubmit}

                className="flex flex-col gap-3">
                <input
                    onChange={e => setTitulo(e.target.value)}
                    value={titulo}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Titulo videojuego">
                </input>

                <input
                    onChange={e => setDescripcion(e.target.value)}
                    value={descripcion}

                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Descripcion videojuego">
                </input>

                <input
                    onChange={e => setNivelRecomendado(e.target.value)}
                    value={nivelRecomendado}
                    className="border border-slate-500 px-8 py-2"
                    type="number"
                    placeholder="Nivel recomendado">
                </input>

                <button className="bg-green-600 font-bold
                text-white py-3 px-6 w-fit">
                    Agregar videojuego
                </button>
            </form>
        </>
    )
}
