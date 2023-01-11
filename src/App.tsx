import React from 'react';
import Game from "./pages/GamePage";
import { useGame } from "./hooks/useGame";
import { gameContext } from "./context/GameContext";


function App(): JSX.Element {

  const gameLogic = useGame();

  return (
    <div className="App">
      <gameContext.Provider value={gameLogic}>
        <Game/>
      </gameContext.Provider>
    </div>
  );
}

export default App;
