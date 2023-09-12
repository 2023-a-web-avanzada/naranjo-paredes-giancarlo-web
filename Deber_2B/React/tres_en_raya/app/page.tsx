'use client'
import cStyles from './misEstilos.module.css'
import {useEffect, useState} from "react";
import {TURNS} from "@/app/constans";
import {checkWinner, checkEndGame} from "@/app/logic/board";
import Square from "@/app/components/Square";
import WinnerModal from "@/app/components/WinnerModal";
import io from "socket.io-client"

const servidorWebsocket = 'http://localhost:11202'
const socket = io(servidorWebsocket)


export default function Home() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)
    const [isConnected, setIsConnected] = useState(socket.connected)

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
            console.log('Si esta conectado')
        });
        socket.on('disconnect', () => {
            setIsConnected(false)
            console.log('no esta conectado')
        })

        socket.on('escucharTurno', (data: { turno: string }) => {
            console.log('escucharTurno', data)
            const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
            setTurn(newTurn)

        })
    }, [])


    const updateBoard = (index: number) => {
        const objeto = {index, board, turn}

        socket.emit(
            'turno',
            objeto,
            () => {
                const newBoard = [...board]
                newBoard[index] = turn
                setBoard(newBoard)

            }
        )


        //Logica para no colocar una casilla dos veces
        if (board[index] || winner) return
        //Logica para guardar el estado actual del tablero en base al turno
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        //Logica para el cambio de turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        //Logica para el ganador
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        // @ts-ignore
        setWinner(null)
    }

    return (
        <main className={cStyles.board}>
            <h1>Tic Tac Toe</h1>
            <button onClick={resetGame}>Reset del juego</button>
            <section className={cStyles.game}>
                {
                    board.map((objeto, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {objeto}
                            </Square>

                        )
                    })

                }

            </section>
            <section className={cStyles.turn}>
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
            <WinnerModal resetGame={resetGame} winner={winner}/>

        </main>
    )
}
