import React from 'react';
import Game from "./pages/GamePage";
import { useGame } from "./hooks/useGame";
import { gameContext } from "./context/GameContext";
import { navContext } from './context/NavContext';
import { useNav } from './hooks/useNav';
import { NavBar } from './components/NavBar';
import { Home } from './pages/HomePage';
import { Outlet } from 'react-router-dom';


function App(): JSX.Element {

  const gameLogic = useGame();
  const navigationLogic = useNav();

  return (
    <div className="App">
      <navContext.Provider value={navigationLogic}>
        <gameContext.Provider value={gameLogic}>
          <NavBar/>
          <Outlet/>
        </gameContext.Provider>
      </navContext.Provider>
    </div>
  );
}

export default App;
