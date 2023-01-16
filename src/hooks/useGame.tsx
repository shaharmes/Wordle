import { useEffect, useRef, useState } from "react";
import { ABC, BoardDefault, gameTileType } from "../components/BoardDeafult";


export type pointerType = {
  currentRow: number,
  currentCol: number
}

export type wordColoringType = {
  correct : string[],
  almost : string[],
  error : string[]
}


export type gameType = {
  pointer: React.MutableRefObject<pointerType>,
  board: gameTileType[][],
  setBoard: React.Dispatch<React.SetStateAction<gameTileType[][]>>,
  boardHandler: (value: string) => void,
  wordColoring: React.MutableRefObject<wordColoringType>
  showResult: boolean,
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>,
  handleShowResult: () => void,
  handleCloseResult: () => void,
  gameReset: () => void
  gameResult: React.MutableRefObject<string | null>
}

export function useGame() : gameType{

  const [board, setBoard] = useState<gameTileType[][]>(BoardDefault);
  const pointer = useRef<pointerType>({currentRow: 0, currentCol: 0});
  const wordColoring = useRef<wordColoringType>({correct: [], almost: [], error: []});
  const [showResult, setShowResult] = useState(false);
  let gameResult = useRef<string | null>(null);

  const handleShowResult = () => setShowResult(true);
  const handleCloseResult = () => setShowResult(false);
  
  const word = 'LEMON';

  useEffect(() => {
    document.getElementById('game')?.focus();
  }, [])

  function gameReset(): void {
    const cleanBoard: gameTileType[][] = board.map(function (row:gameTileType[]): gameTileType[] {
      return row.map(function (tile:gameTileType): gameTileType {
        tile.state = '';
        tile.letter = '';
        return tile;
      })
    })
    gameResult.current = null;
    pointer.current.currentRow = 0;
    pointer.current.currentCol = 0;
    wordColoring.current.correct = [];
    wordColoring.current.almost = [];
    wordColoring.current.error = [];
    setBoard(cleanBoard);
    return;
  }

  async function checkWin() {
    const currWord = board[pointer.current.currentRow-1].map(function (tile:gameTileType): string {
      return tile.letter;
    }).join('');

    const data = {
      word: word,
      pointer: pointer.current,
      currWord : currWord
    }

    const getResult: Response = await fetch('http://localhost:3003/wordle', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const result: string = await getResult.text();
    if (result === 'Win' || result === 'Lose') {
      gameResult.current = result;
      handleShowResult();
    }
  }

  function colorRow(row : number) : void {
    const newBoardColor : gameTileType[][] = [...board];
    newBoardColor[row].forEach(function (tile:gameTileType, col:number): void {
      if (word.indexOf(tile.letter) === -1) {
        tile.state = 'error';
        wordColoring.current.error.push(tile.letter);
      }

      if (word.indexOf(tile.letter) === col) {
        tile.state = 'correct';
        wordColoring.current.correct.push(tile.letter);
      }

      if (word.indexOf(tile.letter) !== col && word.indexOf(tile.letter) !== -1) {
        tile.state = 'almost';
        wordColoring.current.almost.push(tile.letter);
      }
   
    })
    setBoard(newBoardColor);
  }

  function updatePointer(direction : string) : void {
   switch (direction) {
      case "FORWARD":
        if (pointer.current.currentCol === 4) {
          console.log('done');
          pointer.current.currentCol = 0;
          colorRow(pointer.current.currentRow);
          pointer.current.currentRow++;
          checkWin();
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
    if (value === "DELETE" || value === "BACKSPACE") return deleteLetter();
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
    boardHandler,
    wordColoring,
    showResult,
    setShowResult,
    handleShowResult,
    gameResult,
    handleCloseResult,
    gameReset
  }
}



