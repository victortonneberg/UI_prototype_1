import { useState } from 'react';
import './QuestionCard.css';

function QuestionCard({ question, category, onAnswer, playerName }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelectAnswer = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
  };

  const handleContinue = () => {
    const isCorrect = selectedAnswer === question.correctAnswer;
    onAnswer(isCorrect);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="question-card" style={{ borderColor: category.color }}>
      <div className="question-header" style={{ background: category.color }}>
        <h3>{category.name}</h3>
        <p className="player-turn">{playerName} sin tur</p>
      </div>

      <div className="question-content">
        <h2 className="question-text">{question.question}</h2>

        <div className="answer-options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`answer-option ${selectedAnswer === index ? 'selected' : ''}
                ${showResult && index === question.correctAnswer ? 'correct' : ''}
                ${showResult && selectedAnswer === index && index !== question.correctAnswer ? 'incorrect' : ''}`}
              onClick={() => handleSelectAnswer(index)}
              disabled={showResult}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>

        {showResult && (
          <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓ Riktig svar!' : '✗ Feil svar!'}
          </div>
        )}

        <div className="question-actions">
          {!showResult ? (
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
            >
              Svar
            </button>
          ) : (
            <button className="continue-btn" onClick={handleContinue}>
              Fortsett
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
