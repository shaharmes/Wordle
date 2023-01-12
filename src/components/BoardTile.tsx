import React, { useContext } from 'react'
import { gameContext } from '../context/GameContext';
import { gameType, pointerType } from '../hooks/useGame';


function Tile({letter, row, col}:{letter: string, row: number, col: number }) : JSX.Element {

  const {pointer, board} = useContext(gameContext) as gameType;
  const pointerFocus = (pointer.current.currentRow === row && pointer.current.currentCol === col) ? true : false;

  return (
  <div className='letter' id={board[row][col].state}
  style={ pointerFocus ? {border:"1.5px solid blue"} : {}}
  > {letter} </div>)
}

export const GameTile = React.memo(Tile);