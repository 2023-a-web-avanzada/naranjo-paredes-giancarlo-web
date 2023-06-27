'use client'
import CComponente from "@/app/c_componentes/CComponente";

export default function page(){
    return (
        <>
            <CComponente url={'https://www.google.com'}
                         iteraciones={5}
                         mostrar={false}/>
            <CComponente url={'https://www.bing.com'}
                         iteraciones={10}
                         mostrar={true}/>
            <CComponente url={'https://www.epn.edu.ec'}
                         iteraciones={15}
                         mostrar={true}/>

        </>
    )
}