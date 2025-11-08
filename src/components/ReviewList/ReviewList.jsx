import React, { useEffect, useState } from "react";
import "./ReviewList.css";

function ReviewList({ gameId }) {
  const [reviews, setReviews] = useState([]);

  // 🔹 Cargar reseñas (por juego o todas)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        let url = "http://localhost:5000/api/reviews"; // Ajusta según tu backend
        if (gameId) url += `?gameId=${gameId}`;

        const response = await fetch(url);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error al cargar reseñas:", error);
      }
    };

    fetchReviews();
  }, [gameId]);

  return (
    <div className="review-list">
      <h2>Reseñas</h2>
      {reviews.length === 0 ? (
        <p>No hay reseñas disponibles.</p>
      ) : (
        reviews.map((review) => (
          <div className="review-card" key={review._id}>
            <h3>{review.gameTitle}</h3>
            <p className="review-text">{review.text}</p>
            <p className="review-rating">⭐ {review.rating}/5</p>
            <small>
              Escrito por: <strong>{review.user || "Anónimo"}</strong>
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewList;
