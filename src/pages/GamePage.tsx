import { BoardTiles } from "../components/BoardTiles";
import React from 'react';
import { Keyboard } from "../components/Keyboard";



function Game(): JSX.Element {

  return (
    <div id='game'>
        <BoardTiles/>
        <Keyboard />
    </div>
  );
}

export default Game;