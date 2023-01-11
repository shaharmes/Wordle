import { BoardTiles } from "../components/BoardTiles";
import React from 'react';



function Game(): JSX.Element {
  return (
    <div id='game'>
        <BoardTiles/>
    </div>
  );
}

export default Game;