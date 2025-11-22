import React, { useState } from "react";
import "./ReviewForm.css";
import StarRating from "../StarRating/StarRating"; // ⭐ usa tu sistema existente

function ReviewForm({ gameId, gameTitle, onReviewAdded }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameId,
          gameTitle,
          text,
          rating,
          user: "Anónimo"
        }),
      });
      if (!response.ok) throw new Error("Error al enviar reseña");

      setMessage("✅ Reseña enviada con éxito!");
      setText("");
      setRating(0);

      if (onReviewAdded) onReviewAdded(); // refresca la lista si aplica
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al enviar la reseña");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>✍️ Escribir reseña</h3>

      <div className="form-group">
        <label>Puntuación ⭐</label>
        <div className="star">
            <StarRating rating={rating} onRatingChange={setRating} mode="interactive" />
        </div>
      </div>

      <div className="form-group">
        <label>Comentario</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="Escribe tu experiencia con este juego..."
        />
      </div>

      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? "Enviando..." : "Publicar reseña"}
      </button>

      {message && <p className="review-message">{message}</p>}
    </form>
  );
}

export default ReviewForm;
