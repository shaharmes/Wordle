import React, { useContext } from 'react'
import { gameContext } from '../context/GameContext';
import { gameType } from '../hooks/useGame';


export function Key({keyVal}:{keyVal:string}) : JSX.Element {

    const { pointer, boardHandler }: gameType = useContext(gameContext) as gameType;

    function clickHandle () : void {
        return boardHandler(keyVal);
    }


  return (
    <div className='key' key={keyVal} onClick={clickHandle}>
        {keyVal}
    </div>
  )
}