import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating';
import './GameForm.css';

function GameForm({ onSubmit }) {
  const [game, setGame] = useState({
    title: '',
    platform: '',
    coverUrl: '',
    rating: '',
    hoursPlayed: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(game);
    setGame({ title: '', platform: '', coverUrl: '', rating: '', hoursPlayed: '' });
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
        <label>Calificación</label>
        <StarRating 
          rating={Number(game.rating)}
          onRatingChange={(newRating) => setGame({...game, rating: newRating})}
        />
      </div>

      <div className="form-group">
        <label htmlFor="hoursPlayed">Horas Jugadas</label>
        <input
          type="number"
          id="hoursPlayed"
          min="0"
          value={game.hoursPlayed}
          onChange={(e) => setGame({...game, hoursPlayed: e.target.value})}
          required
        />
      </div>

      <button type="submit">Añadir Juego</button>
    </form>
  );
}

export default GameForm;