import { useState } from "react";
import "./MainMenu.css";
import { categories } from "../data/questions";

function MainMenu({ onStartGame }) {
  const [numPlayers, setNumPlayers] = useState(2);
  const [playerSettings, setPlayerSettings] = useState([
    { name: "Spiller 1", difficulty: "easy" },
    { name: "Spiller 2", difficulty: "easy" },
    { name: "Spiller 3", difficulty: "easy" },
    { name: "Spiller 4", difficulty: "easy" },
  ]);

  const handleDifficultyChange = (index, difficulty) => {
    const newSettings = [...playerSettings];
    newSettings[index].difficulty = difficulty;
    setPlayerSettings(newSettings);
  };

  const handleNameChange = (index, name) => {
    const newSettings = [...playerSettings];
    newSettings[index].name = name;
    setPlayerSettings(newSettings);
  };

  const handleStart = () => {
    onStartGame({
      numPlayers,
      players: playerSettings.slice(0, numPlayers),
      selectedChapters: Array.from(selectedChapters),
    });
  };

  const [selectedChapters, setSelectedChapters] = useState(
    () => new Set(categories.map((c) => c.id)),
  );

  const handleToggleChapter = (id) => {
    setSelectedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="main-menu">
      <div className="menu-container">
        <h1 className="game-title">JavaScript Quest</h1>
        <p className="game-subtitle">
          Et hybrid programmeringsspill inspirert av D&D
        </p>

        <div className="menu-section">
          <label className="menu-label">Antall spillere</label>
          <div className="player-count-buttons">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className={`player-count-btn ${numPlayers === num ? "active" : ""}`}
                onClick={() => setNumPlayers(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="players-setup">
          {Array.from({ length: numPlayers }).map((_, index) => (
            <div key={index} className="player-setup-card">
              <h3>Spiller {index + 1}</h3>
              <input
                type="text"
                className="player-name-input"
                value={playerSettings[index].name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                placeholder={`Spiller ${index + 1}`}
              />
              <div className="difficulty-selector">
                <label>Vanskelighetsgrad</label>
                <div className="difficulty-buttons">
                  {["easy", "medium", "hard"].map((diff) => (
                    <button
                      key={diff}
                      className={`difficulty-btn ${playerSettings[index].difficulty === diff ? "active" : ""} ${diff}`}
                      onClick={() => handleDifficultyChange(index, diff)}
                    >
                      {diff === "easy"
                        ? "Lett"
                        : diff === "medium"
                          ? "Middels"
                          : "Vanskelig"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-section chapters-section">
          <label className="menu-label">Velg kapitler</label>
          <div className="chapter-list">
            {categories.map((cat) => (
              <label key={cat.id} className="chapter-item">
                <input
                  type="checkbox"
                  checked={selectedChapters.has(cat.id)}
                  onChange={() => handleToggleChapter(cat.id)}
                />
                <span
                  className="chapter-chip"
                  style={{ background: cat.color }}
                >
                  {cat.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button className="start-game-btn" onClick={handleStart}>
          Start Spillet
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
