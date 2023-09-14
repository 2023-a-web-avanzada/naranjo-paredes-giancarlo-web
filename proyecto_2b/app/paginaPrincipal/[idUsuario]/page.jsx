'use client'
import NavPaginaPrincipal from "@/app/componentes/navPaginaPrincipal";
import CarteleraDeImagenes from "@/app/componentes/carteleraDeImagenes";
import Categorias from "@/app/componentes/categorias";
import TarjetaVideoJuego from "@/app/componentes/tarjetaVideojuego";
import Footer from "@/app/componentes/footer";

export default function PaginaPrincipal() {
    return (
        <>
            <NavPaginaPrincipal/>
            <CarteleraDeImagenes/>
            <Categorias/>
            <TarjetaVideoJuego/>
            <Footer/>
        </>
    )
}