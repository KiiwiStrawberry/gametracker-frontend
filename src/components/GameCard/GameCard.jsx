import React from "react";
import StarRating from "../StarRating/StarRating";
import ReviewForm from "../ReviewForm/ReviewForm";
import ReviewList from "../ReviewList/ReviewList";
import "./GameCard.css";

function GameCard({ id, title, platform, coverUrl, rating, hoursPlayed }) {
  return (
    <div className="game-card">

      <img className="game-card__image" src={coverUrl} alt={title} />

      <div className="game-card__content">
        <h3 className="game-card__title">{title}</h3>
        <p className="game-card__platform">{platform}</p>
        <div className="game-card__stats">
          <StarRating rating={rating} />
          <span>🕒 {hoursPlayed}h</span>
        </div>
      </div>

      {/* ⭐ Nuevo: reseñas por juego */}
      <ReviewForm gameId={id} gameTitle={title} />
      <ReviewList gameId={id} />
    </div>
  );
}

export default GameCard;
