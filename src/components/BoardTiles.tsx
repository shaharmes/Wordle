import React, { useContext } from 'react';
import { gameContext } from "../context/GameContext";
import { gameType } from "../hooks/useGame";
import { gameTileType } from "./BoardDeafult";
import { GameTile } from './BoardTile';
import { GameTileContainer } from './TileRow';

export function BoardTiles () : JSX.Element {

  const { board } = useContext(gameContext) as gameType;

  return (
    <div id="board" key={'board'}>
          {board.map((container: gameTileType[], i) => {
          return (
            <GameTileContainer key={`row-${i}`}>
              {container.map((gameTile, j) => {
                return (
                  <GameTile key={`row-${i}-col-${j}`} letter={gameTile.letter} row={i} col={j} />
                )
              })}
            </GameTileContainer>)
        })}
    </div>
  )
}


