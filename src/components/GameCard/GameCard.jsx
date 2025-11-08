import React from 'react';
import StarRating from '../StarRating/StarRating';
import './GameCard.css';

function GameCard({ title, platform, coverUrl, rating, hoursPlayed }) {
  return (
    <div className="game-card">
      <img 
        className="game-card__image"
        src={coverUrl || 'https://via.placeholder.com/150'} 
        alt={title}
      />
      <div className="game-card__content">
        <h3 className="game-card__title">{title}</h3>
        <p className="game-card__platform">{platform}</p>
        <div className="game-card__stats">
          <StarRating rating={rating} />
          <span>🕒 {hoursPlayed}h</span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;