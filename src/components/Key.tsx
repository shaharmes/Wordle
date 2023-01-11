import React, { useContext } from 'react'
import { gameContext } from '../context/GameContext';
import { gameType } from '../hooks/useGame';


export function Key({keyVal}:{keyVal:string}) : JSX.Element {

    const { pointer }: gameType = useContext(gameContext) as gameType;
    if (!pointer) {
        return <></>;
    }

    function clickHandle () : void {
        console.log(pointer.current.currentRow, pointer.current.currentCol);

    }


  return (
    <div className='key' key={keyVal} onClick={clickHandle}>
        {keyVal}
    </div>
  )
}