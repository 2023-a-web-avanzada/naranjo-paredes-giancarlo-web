import React from 'react';

const Categorias = () => {
    const categorias = ['ROL', 'ACCIÓN', 'AVENTURA', 'CASUAL', 'JRPG', 'ESTRATEGIA', 'SIMULACIÓN'];

    return (
        <>
            <div className="flex justify-center">
                <div className="text-white text-1xl font-bold uppercase">
                    CATEGORÍA:
                </div>
                {categorias.map((categoria, index) => (
                    <a
                        key={index}
                        href={`#${categoria.toLowerCase()}`} // Enlace temporal; reemplázalo con los enlaces reales
                        className="text-uppercase text-white hover:underline ml-4"
                    >
                        {categoria}
                    </a>
                ))}
            </div>
        </>

    );
};

export default Categorias;
