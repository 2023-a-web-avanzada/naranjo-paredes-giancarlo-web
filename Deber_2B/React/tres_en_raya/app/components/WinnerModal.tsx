import cStyles from "@/app/misEstilos.module.css";
import Square from "@/app/components/Square";

export type PropiedadesComponente = {
    resetGame?: () => void;
    winner?: boolean;
}

export default function WinnerModal(props: PropiedadesComponente) {
    const {resetGame, winner} = props;
    if (winner === null) return null
    const winnerText = winner === false ? 'Empate' : 'Gano: '
    return (
        <section className={cStyles.winner}>
            <div className={cStyles.text}>
                <h2>
                    {winnerText}
                </h2>
                <header className={cStyles.win}>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>
                        Empezar de nuevo
                    </button>
                </footer>
            </div>
        </section>
    )
}