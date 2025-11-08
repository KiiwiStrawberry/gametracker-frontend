import React from 'react';
import GameCard from '../GameCard/GameCard.jsx';

function GameList({ games }) {
  return (
    <div className="games-grid">
      {games.map(game => (
        <GameCard key={game.title} {...game} />
      ))}
    </div>
  );
}

export default GameList;