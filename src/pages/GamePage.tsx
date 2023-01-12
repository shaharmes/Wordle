import { BoardTiles } from "../components/BoardTiles";
import React, { useContext } from 'react';
import { Keyboard } from "../components/Keyboard";
import { gameContext } from "../context/GameContext";
import { gameType } from "../hooks/useGame";



function Game(): JSX.Element {

  const {boardHandler} = useContext(gameContext) as gameType;

  return (
    <div id='game' onKeyDown ={e => boardHandler(e.key.toUpperCase())} tabIndex={0}>
        <BoardTiles/>
        <Keyboard />
    </div>
  );
}

export default Game;