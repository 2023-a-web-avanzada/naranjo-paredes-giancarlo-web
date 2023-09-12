import EditVideogameForm from "@/components/EditVideogameForm";

const getVideogameById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/videogames/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch topic');
        }
        return res.json();
    } catch (error) {
        console.log(error);

    }

}

export default async function EditVideogame({ params }) {
    const { id } = params
    const { videogame } = await getVideogameById(id)
    const { titulo, descripcion } = videogame;

    return (
        <>
            <EditVideogameForm id={id} titulo={titulo}
                descripcion={descripcion} />
        </>
    )

}