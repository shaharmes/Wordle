import React from 'react'


export function Key({keyVal}:{keyVal:string}) : JSX.Element {

    function clickHandle () : void {

    }


  return (
    <div className='key' key={keyVal} onClick={clickHandle}>
        {keyVal}
    </div>
  )
}