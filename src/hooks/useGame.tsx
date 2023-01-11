import react, {useRef} from "react";

export type gameTileType = {
  classState: string,
  letter: string
}

export type pointerType = {
  currentRow: number,
  currentCol: number
}

export type gameType = {
  pointer: React.MutableRefObject<pointerType>,
}

export function useGame() : gameType{
  const pointer = useRef<pointerType>({currentRow: 0, currentCol: 0});
  return {
    pointer,
  }
}



