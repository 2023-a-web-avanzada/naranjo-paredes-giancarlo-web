'use client';

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function RemoveBtn({id}){
    const router = useRouter();

    const removeVideogame = async()=>{
        const confirmed = confirm('Estas seguro?');
        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/videogames?id=${id}`,{
                method: "DELETE"
            });

            if(res.ok){
                router.refresh();
            }

        }

    }
    return(
        <>
        <button onClick={removeVideogame} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
        
        </>
    )
}