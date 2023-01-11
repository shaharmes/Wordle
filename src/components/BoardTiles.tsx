import { Tile } from "./BoardTile";
import React from 'react';

export function BoardTiles () {

  const lstLetters : number[] = [0, 1, 2, 3, 4];

  const lstRows : number[] = [0, 1, 2, 3, 4, 5];

  function CreateRow ({row} :{row : number}) : JSX.Element {
    return (
      <div id="row">
        {lstLetters.map( num => (<Tile cellPosition={num} rowPosition={row} key={`row-${row}-cell${num}`}/>))}
      </div>
    )
  }

  return (
    <div id="board" key={'board'}>
      {lstRows.map( row => <CreateRow row={row}/>)}
    </div>
  )
}