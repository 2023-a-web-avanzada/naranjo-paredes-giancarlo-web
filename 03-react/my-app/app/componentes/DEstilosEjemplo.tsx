// app/componentes/DEstilosEjemplo.tsx
// npm install --save @emotion/styled @emotion/react
'use client'
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import cStyles from './c_estilos.module.css'
const pinkStyle = css`
  color: pink;
`
const TituloNaranja = styled.h1`
    color: orange;
    font-size: 8px;
`
const TituloVerde = styled.h2`
    color: green;
    font-size: 10px;
`
export default function DEstilosEjemplo(){
    const misEstilos = {
        color: '#fff',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };

    return(
        <>
            <TituloNaranja>Titulo 1</TituloNaranja>
            <TituloVerde>Titulo 2</TituloVerde>
            <div css={pinkStyle}>
                Texto pink
            </div>
            <p className={cStyles.rojo}>Clase rojo</p>
            <p style={misEstilos}>Mis estilos</p>
            <p style={
                {
                    color: 'black',
                    backgroundColor: '#fff',
                    borderBottom: '5px solid green',
                }
            }>Estilos en linea</p>
        </>
    )
}