import NavPaginaPrincipal from "@/app/componentes/navPaginaPrincipal";
import TarjetaVideoJuego from "@/app/componentes/tarjetaVideojuego";
import Footer from "@/app/componentes/footer";

export default function biblioteca() {

    return (
        <>
            <NavPaginaPrincipal/>
            <h1 className="m-4 text-white">
                BIBLIOTECA:
            </h1>
            <TarjetaVideoJuego/>
            <TarjetaVideoJuego/>
            <Footer/>
        </>
    )
}