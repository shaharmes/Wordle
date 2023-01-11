import react, {useRef, useState} from "react";
import { ABC, BoardDefault, gameTileType } from "../components/BoardDeafult";


export type pointerType = {
  currentRow: number,
  currentCol: number
}

export type gameType = {
  pointer: React.MutableRefObject<pointerType>,
  board: gameTileType[][],
  setBoard: React.Dispatch<React.SetStateAction<gameTileType[][]>>
  boardHandler: (value: string) => void
}

export function useGame() : gameType{

  const [board, setBoard] = useState<gameTileType[][]>(BoardDefault);
  const pointer = useRef<pointerType>({currentRow: 0, currentCol: 0});

  function updatePointer() : void {
    if (pointer.current.currentCol === 4) {
      pointer.current.currentCol = 0;
      pointer.current.currentRow++;
    } else {
      pointer.current.currentCol++;
    }
  }

  function boardHandler(value : string) : void {
    if (ABC.indexOf(value) === -1 ) return;

    const newBoard: gameTileType[][] = [...board];
    board[pointer.current.currentRow][pointer.current.currentCol].letter = value;

    updatePointer();
    setBoard(newBoard);
  }

  return {
    pointer,
    board,
    setBoard,
    boardHandler
  }
}



