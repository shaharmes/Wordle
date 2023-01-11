import React, {useContext} from 'react'
import { gameContext } from '../context/GameContext';
import { gameType } from '../hooks/useGame';



export function Tile({cellPosition, rowPosition}:{cellPosition: number, rowPosition: number }) : JSX.Element {

  const { pointer, board}: gameType = useContext(gameContext) as gameType;
   
  const letter : string = board[rowPosition][cellPosition].letter;

    
  return (
    <div className='letter' key={Math.random()}>
      {letter}
    </div>
  )
}