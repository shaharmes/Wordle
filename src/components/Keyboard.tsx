import React, { useContext } from "react";
import { gameContext } from "../context/GameContext";
import { gameType } from "../hooks/useGame";
import { Key } from "./Key";

export function Keyboard () : JSX.Element {

    const {boardHandler} = useContext(gameContext) as gameType;

    const keys1 : string[] = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 : string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 : string[] = ["Z", "X", "C", "V", "B", "N", "M"];
    const keyDelete : string = "DELETE";
    const keyEnter : string = "ENTER";

    function handleDelete() : void {
        boardHandler(keyDelete);
    }
 
    return (
    <div className="keyboard">
        <div className="line1">
            {keys1.map( (key : string) => {
                return <Key key= {key} keyVal = {key} />
            })}
        </div>
        <div className="line2">
            {keys2.map( (key : string) => {
                return <Key key= {key} keyVal = {key} />
            })}
        </div>
        <div className="line3">
            <div className='key' id={'big'}>
                {keyEnter}
            </div>
            {keys3.map( (key : string) => {
                return <Key key= {key} keyVal = {key} />
            })}
            <div className='key' id={'big'} onClick={handleDelete}>
                {keyDelete}
            </div>
        </div>
    </div>
    );
}