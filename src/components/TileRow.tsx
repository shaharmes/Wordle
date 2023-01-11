import React from "react";

type propsType = {
    children: JSX.Element[]
}

export function GameTileContainer(props: propsType): JSX.Element {
    return (<div id="row">{props.children}</div>)
}