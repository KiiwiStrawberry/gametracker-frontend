import React, { useState } from 'react';
import './GameForm.css';

function GameForm({ onSubmit }) {
  const [game, setGame] = useState({
    title: '',
    platform: '',
    coverUrl: '',
    rating: 0,
    hoursPlayed: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(game);
    setGame({ title: '', platform: '', coverUrl: '', rating: 0, hoursPlayed: 0 });
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <h2>Añadir Nuevo Juego</h2>
      
      <div className="form-group">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          value={game.title}
          onChange={(e) => setGame({...game, title: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="platform">Plataforma</label>
        <input
          type="text"
          id="platform"
          value={game.platform}
          onChange={(e) => setGame({...game, platform: e.target.value})}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="coverUrl">URL de Portada</label>
        <input
          type="url"
          id="coverUrl"
          value={game.coverUrl}
          onChange={(e) => setGame({...game, coverUrl: e.target.value})}
        />
      </div>

      <div className="form-group">
        <label htmlFor="rating">Calificación (0-5)</label>
        <input
          type="number"
          id="rating"
          min="0"
          max="5"
          value={game.rating}
          onChange={(e) => setGame({...game, rating: Number(e.target.value)})}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="hoursPlayed">Horas Jugadas</label>
        <input
          type="number"
          id="hoursPlayed"
          min="0"
          value={game.hoursPlayed}
          onChange={(e) => setGame({...game, hoursPlayed: Number(e.target.value)})}
          required
        />
      </div>

      <button type="submit">Añadir Juego</button>
    </form>
  );
}

export default GameForm;