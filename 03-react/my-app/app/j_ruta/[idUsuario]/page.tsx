'use client'
// j_ruta/[idUsuario]/page.tsx
export default function Page(
    { params }: { params: { idUsuario: string } }
){
    const semestres = ['2020A','2020B','2021A','2021B','2022A','2022B']
    return (
        <>
            <div className="container">
                <p>Ruta MOSTRAR USUARIO: {
                    params.idUsuario
                } </p>
                <ul>
                    { semestres.map((semestre)=> <li key={semestre}>
                        <a href={`/j_ruta/${params.idUsuario}/${semestre}`}>{semestre}</a>
                    </li>)
                    }
                </ul>
            </div>
        </>
    )
}