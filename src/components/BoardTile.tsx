import React, {useState} from 'react'
import { BoardDefault } from './BoardDeafult';


export function Tile({cellPosition, rowPosition}:{cellPosition: number, rowPosition: number }) : JSX.Element {

    const [board, setBoard] = useState<{letter: string, state: string}[][]>(BoardDefault);
    
    const letter : string = board[rowPosition][cellPosition].letter;

    
  return (
    <div className='letter' key={Math.random()}>
      {letter}
    </div>
  )
}