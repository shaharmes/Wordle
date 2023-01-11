import React from 'react'


function Tile({letter}:{letter: string }) : JSX.Element {
  return (<div className='letter'> {letter} </div>)
}

export const GameTile = React.memo(Tile);