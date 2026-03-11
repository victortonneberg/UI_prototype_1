import { useState } from 'react';
import MainMenu from './components/MainMenu';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameSettings, setGameSettings] = useState(null);

  const handleStartGame = (settings) => {
    setGameSettings(settings);
    setGameStarted(true);
  };

  const handleBackToMenu = () => {
    setGameStarted(false);
    setGameSettings(null);
  };

  return (
    <>
      {!gameStarted ? (
        <MainMenu onStartGame={handleStartGame} />
      ) : (
        <GameBoard gameSettings={gameSettings} onBackToMenu={handleBackToMenu} />
      )}
    </>
  );
}

export default App;
