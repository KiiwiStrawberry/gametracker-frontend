import React, { useEffect, useState } from "react";
import "./PersonalStats.css";

function PersonalStats() {
    const [stats, setStats] = useState({
        totalGames: 12,
        completedGames: 5,
        averageRating: 4.2,
        totalHours: 147,
    });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/games/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error al cargar estadísticas:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="stats-container">
      <h2>Estadísticas Personales</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>🎮 Total de juegos</h3>
          <p>{stats.totalGames}</p>
        </div>
        <div className="stat-card">
          <h3>✅ Completados</h3>
          <p>{stats.completedGames}</p>
        </div>
        <div className="stat-card">
          <h3>⭐ Promedio de puntuación</h3>
          <p>{stats.averageRating.toFixed(1)}</p>
        </div>
        <div className="stat-card">
          <h3>🕒 Horas jugadas</h3>
          <p>{stats.totalHours}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalStats;
