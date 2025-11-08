import React from 'react';
import './StarRating.css';

function StarRating({ rating, onRatingChange }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => onRatingChange && onRatingChange(star)}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

export default StarRating;