'use client'
// j_ruta/[idUsuario]/[semestre]/[materia]/page.tsx
export default function Page(
    { params }: { params: { idUsuario: string; semestre: string; materia: string; } }
){
    return (
        <>
            <div className="container">
                <p>USUARIo: {params.idUsuario} / SEMESTRE : {params.semestre} / Materia: {params.materia}</p>
            </div>
        </>
    )

}