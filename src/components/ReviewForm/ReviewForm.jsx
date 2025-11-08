import React, { useState } from "react";
import "./ReviewForm.css";

function ReviewForm({ gameId, onReviewAdded }) {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
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
        body: JSON.stringify({ gameId, rating, text }),
      });

      if (!response.ok) throw new Error("Error al enviar reseña");

      setMessage("✅ Reseña enviada con éxito!");
      setText("");
      setRating(0);

      if (onReviewAdded) onReviewAdded(); // refresca la lista si se envía correctamente
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al enviar la reseña");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Escribir reseña</h3>

      <label>Puntuación:</label>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={num <= rating ? "star filled" : "star"}
            onClick={() => setRating(num)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe aquí tu reseña..."
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Publicar Reseña"}
      </button>

      {message && <p className="review-message">{message}</p>}
    </form>
  );
}

export default ReviewForm;
