import { useState, useEffect } from 'react';
import Dice3D from './Dice3D';
import QuestionCard from './QuestionCard';
import { questions, getCategoryFromDice } from '../data/questions';
import './GameBoard.css';

function GameBoard({ gameSettings, onBackToMenu }) {
  const [gameState, setGameState] = useState('rolling'); // rolling, diceComplete, question
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [d6Result, setD6Result] = useState(null);
  const [d20Result, setD20Result] = useState(null);
  const [isD6Rolling, setIsD6Rolling] = useState(false);
  const [isD20Rolling, setIsD20Rolling] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  const currentPlayer = gameSettings.players[currentPlayerIndex];

  const rollDice = () => {
    setGameState('rolling');
    setIsD6Rolling(true);
    setIsD20Rolling(true);

    // Generate random results
    const d6 = Math.floor(Math.random() * 6) + 1;
    const d20 = Math.floor(Math.random() * 20) + 1;

    setD6Result(d6);
    setD20Result(d20);
  };

  const handleD6Complete = () => {
    setIsD6Rolling(false);
  };

  const handleD20Complete = () => {
    setIsD20Rolling(false);
  };

  // Check when both dice are done rolling
  useEffect(() => {
    if (!isD6Rolling && !isD20Rolling && d6Result && d20Result && gameState === 'rolling') {
      const category = getCategoryFromDice(d20Result);
      setCurrentCategory(category);
      setGameState('diceComplete');
    }
  }, [isD6Rolling, isD20Rolling, d6Result, d20Result, gameState]);

  const handleProceedToQuestion = () => {
    // Get random question from category based on difficulty
    const categoryQuestions = questions[currentCategory.id][currentPlayer.difficulty];
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];

    setCurrentQuestion(randomQuestion);
    setGameState('question');
  };

  const handleAnswer = (isCorrect) => {
    // Move to next player
    setCurrentPlayerIndex((prev) => (prev + 1) % gameSettings.numPlayers);
    setGameState('rolling');
    setD6Result(null);
    setD20Result(null);
    setCurrentQuestion(null);
    setCurrentCategory(null);
  };

  return (
    <div className="game-board">
      <div className="game-header">
        <h1>JavaScript Quest</h1>
        <button className="back-btn" onClick={onBackToMenu}>
          ← Tilbake til meny
        </button>
      </div>

      <div className="players-info">
        {gameSettings.players.map((player, index) => (
          <div
            key={index}
            className={`player-info ${index === currentPlayerIndex ? 'active' : ''}`}
          >
            <div className="player-name">{player.name}</div>
            <div className="player-difficulty">
              {player.difficulty === 'easy' ? 'Lett' : player.difficulty === 'medium' ? 'Middels' : 'Vanskelig'}
            </div>
          </div>
        ))}
      </div>

      {(gameState === 'rolling' || gameState === 'diceComplete') && (
        <div className="rolling-section">
          <div className="current-player-display">
            <h2>{currentPlayer.name} sin tur!</h2>
          </div>

          {d6Result === null ? (
            <button className="roll-dice-btn" onClick={rollDice}>
              Kast Terningene
            </button>
          ) : (
            <>
              <div className="dice-container">
                <div className="dice-section">
                  <h3>D6 - Bevegelse</h3>
                  <Dice3D
                    type={6}
                    isRolling={isD6Rolling}
                    onRollComplete={handleD6Complete}
                    result={d6Result}
                  />
                  {!isD6Rolling && <div className="dice-result">Du flytter {d6Result} felt!</div>}
                </div>

                <div className="dice-section">
                  <h3>D20 - Kategori</h3>
                  <Dice3D
                    type={20}
                    isRolling={isD20Rolling}
                    onRollComplete={handleD20Complete}
                    result={d20Result}
                  />
                  {!isD20Rolling && currentCategory && (
                    <>
                      <div className="dice-result">
                        Du fikk: <strong>{d20Result}</strong>
                      </div>
                      <div className="dice-result" style={{ color: currentCategory.color }}>
                        {currentCategory.name}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {gameState === 'diceComplete' && !isD6Rolling && !isD20Rolling && (
                <button className="proceed-btn" onClick={handleProceedToQuestion}>
                  Gå til Spørsmål →
                </button>
              )}
            </>
          )}
        </div>
      )}

      {gameState === 'question' && currentQuestion && currentCategory && (
        <QuestionCard
          question={currentQuestion}
          category={currentCategory}
          onAnswer={handleAnswer}
          playerName={currentPlayer.name}
        />
      )}
    </div>
  );
}

export default GameBoard;
