import React, { useState, useEffect } from "react";
import "./StarRating.css";

const STARS = [1, 2, 3, 4, 5];

function StarRating({ rating = 0, onRatingChange, mode = "display" }) {
  const [hoverValue, setHoverValue] = useState(0);
  const [animatedStars, setAnimatedStars] = useState([]);

  useEffect(() => {
    let timeoutIds = [];
    setAnimatedStars([]);

    STARS.forEach((star, index) => {
      if (star <= rating) {
        const timeoutId = setTimeout(() => {
          setAnimatedStars((prev) => [...prev, star]);
        }, index * 120);
        timeoutIds.push(timeoutId);
      }
    });

    return () => timeoutIds.forEach(clearTimeout);
  }, [rating]);

  const handleClick = (value) => {
    if (mode === "interactive" && onRatingChange) onRatingChange(value);
  };

  const handleMouseEnter = (value) => {
    if (mode === "interactive") setHoverValue(value);
  };

  const handleMouseLeave = () => {
    if (mode === "interactive") setHoverValue(0);
  };

  return (
    <div className={`star-rating ${mode}`}>
      {STARS.map((star) => (
        <span
          key={star}
          className={`star
            ${star <= (hoverValue || rating) ? "filled" : ""}
            ${animatedStars.includes(star) ? "animate" : ""}
          `}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
