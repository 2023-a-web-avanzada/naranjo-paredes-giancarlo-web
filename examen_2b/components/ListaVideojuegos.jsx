import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi"

const getVideogames = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/videogames', {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch videogames")
        }
        return res.json();
    } catch (error) {
        console.log("Error loanding videogames", error)

    }

}
export default async function ListaVideojuegos() {
    const { videogames } = await getVideogames();
    return (
        <>
            {videogames.map(v => (
                <div className="p-4 border border-slate-300 my-3 
            flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{v.titulo}</h2>
                        <div>{v.descripcion}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={v._id} />
                        <Link href={`editVideogame/${v._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}

        </>
    )
}