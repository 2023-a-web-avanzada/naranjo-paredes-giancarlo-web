import NavPaginaPrincipal from "@/app/componentes/navPaginaPrincipal";
import TarjetaJugador from "@/app/componentes/tarjetaJugador";
import Footer from "@/app/componentes/footer";
/*Funcion que obtenga el usuario por medio de get*/
const getUsuarioById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/usuario/${id}`, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("Error al cargar usuario")
        }
        return res.json()

    } catch (error) {
        console.log(error)

    }
}

export default async function Perfil() {
    const id_Usuario = "650201052a97e2845ad6e7df"
    const {usuario} = await getUsuarioById(id_Usuario)

    return (
        <>
            <NavPaginaPrincipal id={id_Usuario}/>
            <h1 className="m-4 text-white">
                Información de usuario:
            </h1>
            <TarjetaJugador objetoProp={usuario}/>
            <Footer/>
        </>
    )
}