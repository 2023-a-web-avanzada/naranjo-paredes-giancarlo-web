import {WINNER_COMBOS} from "@/app/constans";

export const checkWinner = (boardToCheck: any) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // si no hay ganador
    return null

}
export const checkEndGame = (newBoard: any[]) => {
    return newBoard.every((square) => {
        square !== null
    })
}