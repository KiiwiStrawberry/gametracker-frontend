import React from "react";
import GameCard from "../GameCard/GameCard";
import "./GameList.css";

function GameList({ games }) {
  return (
    <div className="game-list">
      {games.map((game, index) => (
        <GameCard key={game.id || game.title || index} {...game} />
      ))}
    </div>
  );
}

export default GameList;
