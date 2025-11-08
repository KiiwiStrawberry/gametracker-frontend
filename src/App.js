import React, { useState } from 'react';
import './styles/App.css';
import GameList from './components/GameList/GameList';
import GameForm from './components/GameForm/GameForm';

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

  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="App">
      <header>
        <h1>GameTracker</h1>
      </header>
      <main>
        <GameForm onSubmit={handleAddGame} />
        <GameList games={games} />
      </main>
    </div>
  );
}

export default App;