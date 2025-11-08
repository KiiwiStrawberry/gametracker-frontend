import React, { useState } from "react";
import "./GameForm.css";
import StarRating from "../StarRating/StarRating";

function GameForm({ onSubmit }) {
  const [newGame, setNewGame] = useState({
    title: "",
    platform: "",
    coverUrl: "",
    rating: 0,
    hoursPlayed: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGame({ ...newGame, [name]: value });
  };

  const handleRatingChange = (value) => {
    setNewGame({ ...newGame, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newGame);
    setNewGame({ title: "", platform: "", coverUrl: "", rating: 0, hoursPlayed: 0 });
  };

  return (
    <form className="game-form card" onSubmit={handleSubmit}>
      <h2>🎮 Agregar nuevo juego</h2>

      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={newGame.title}
          onChange={handleChange}
          required
          placeholder="Ej: The Legend of Zelda"
        />
      </div>

      <div className="form-group">
        <label>Plataforma</label>
        <input
          type="text"
          name="platform"
          value={newGame.platform}
          onChange={handleChange}
          required
          placeholder="Ej: Nintendo Switch"
        />
      </div>

      <div className="form-group">
        <label>URL de portada</label>
        <input
          type="url"
          name="coverUrl"
          value={newGame.coverUrl}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Horas jugadas</label>
          <input
            type="number"
            name="hoursPlayed"
            value={newGame.hoursPlayed}
            onChange={handleChange}
            min="0"
            placeholder="Ej: 40"
          />
        </div>

        <div className="form-group">
          <label>Puntuación ⭐</label>
          <StarRating rating={newGame.rating} onRatingChange={handleRatingChange} />
        </div>
      </div>

      <button type="submit" className="submit-btn">Agregar Juego</button>
    </form>
  );
}

export default GameForm;
