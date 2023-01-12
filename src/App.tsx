import React from 'react';
import Game from "./pages/GamePage";
import { useGame } from "./hooks/useGame";
import { gameContext } from "./context/GameContext";
import { navContext } from './context/NavContext';
import { useNav } from './hooks/useNav';
import { NavBar } from './components/NavBar';


function App(): JSX.Element {

  const gameLogic = useGame();
  const navigationLogic = useNav();

  return (
    <div className="App">
      <navContext.Provider value={navigationLogic}>
        <gameContext.Provider value={gameLogic}>
          <NavBar />
          <Game/>
        </gameContext.Provider>
      </navContext.Provider>
    </div>
  );
}

export default App;
