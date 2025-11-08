import React, { useState, useEffect } from 'react';
import './styles/App.css';
import GameList from './components/GameList/GameList';
import GameForm from './components/GameForm/GameForm';
import PersonalStats from './components/PersonalStats/PersonalStats';

function App() {
  const [games, setGames] = useState([
    {
      title: "The Legend of Zelda",
      platform: "Nintendo Switch",
      coverUrl: "https://via.placeholder.com/150",
      rating: 5,
      hoursPlayed: 40
    },
    {
      title: "God of War",
      platform: "PlayStation 4",
      coverUrl: "https://via.placeholder.com/150",
      rating: 4,
      hoursPlayed: 30
    }
  ]);

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="App">
      <button 
        className="toggle-theme-btn" 
        onClick={() => setDarkMode(!darkMode)}
        title="Cambiar tema"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      <header>
        <h1>GameTracker</h1>
      </header>
      <main>
        <GameForm onSubmit={handleAddGame} />
        <GameList games={games} />
        <PersonalStats games={games} />
      </main>
    </div>
  );
}

export default App;
