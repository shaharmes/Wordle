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

  function updatePointer(direction : string) : void {
   switch (direction) {
      case "FORWARD":
        if (pointer.current.currentCol === 4) {
          pointer.current.currentCol = 0;
          pointer.current.currentRow++;
        } else {
          pointer.current.currentCol++;
        }
        break;
      case "BACKWARD":
        pointer.current.currentCol--;
        break;
    }
  }

  function deleteLetter() : void {
    if (pointer.current.currentCol === 0) return;

    const newBoardDelete : gameTileType[][] = [...board];
    newBoardDelete[pointer.current.currentRow][pointer.current.currentCol - 1].letter = '';

    updatePointer("BACKWARD");
    setBoard(newBoardDelete);
    return;
  }

  function boardHandler(value : string) : void {
    if (value === "DELETE") return deleteLetter();
    if (ABC.indexOf(value) === -1 ) return;

    const newBoard: gameTileType[][] = [...board];
    board[pointer.current.currentRow][pointer.current.currentCol].letter = value;

    updatePointer("FORWARD");
    setBoard(newBoard);
  }

  return {
    pointer,
    board,
    setBoard,
    boardHandler
  }
}



