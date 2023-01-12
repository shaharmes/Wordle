import React, { useContext } from 'react'
import { gameContext } from '../context/GameContext';
import { gameType } from '../hooks/useGame';


export function Key({keyVal}:{keyVal:string}) : JSX.Element {

    const { boardHandler, wordColoring }: gameType = useContext(gameContext) as gameType;

    function clickHandle () : void {
        return boardHandler(keyVal);
    }

    let keyState: string = '';

    if (wordColoring.current.correct.includes(keyVal)){
      keyState = 'correct';
    } else if (wordColoring.current.almost.includes(keyVal)){
      keyState = 'almost';
    } else if (wordColoring.current.error.includes(keyVal)){
      keyState = 'error';
    }


  return (
    <div className='key' id={keyState} key={keyVal} onClick={clickHandle}>
        {keyVal}
    </div>
  )
}