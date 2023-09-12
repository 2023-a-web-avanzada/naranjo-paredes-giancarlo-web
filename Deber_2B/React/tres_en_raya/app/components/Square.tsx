'use client'
import cStyles from '../misEstilos.module.css'


export type PropiedadesComponente = {
    children?: string | boolean;
    key?: number;
    index?: number;
    isSelected?: boolean;
    updateBoard?: (index: number) => void;
}


export default function Square(props: PropiedadesComponente) {
    const {children, index, isSelected, updateBoard} = props;
    const className = () => {
        if (isSelected) {
            return 'misEstilos_isSelected__sE5a4'
        } else {
            return ''
        }

    }
    const handleClick = () => {
        if (updateBoard) {
            updateBoard(index as number)
        }
    }
    return (
        <div onClick={handleClick} className={`${cStyles.square} ${className()}`}>
            {children}
        </div>

    )
}