import React, { useEffect, useState } from "react";
import "./PersonalStats.css";

function PersonalStats() {
  const [stats, setStats] = useState({
    totalGames: 0,
    completedGames: 0,
    averageRating: 0,
    totalHours: 0,
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/games/stats");

        if (!response.ok) throw new Error("Error al conectar con el servidor.");

        const data = await response.json();

        setStats({
          totalGames: data.totalGames ?? 0,
          completedGames: data.completedGames ?? 0,
          averageRating: data.averageRating ?? 0,
          totalHours: data.totalHours ?? 0,
        });
      } catch (error) {
        console.error("Error al cargar estadísticas:", error);
        setError("No se pudieron cargar las estadísticas. Usando datos locales.");
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="stats-container">
      <h2>Estadísticas Personales</h2>

      {error && <p className="error-text">{error}</p>}
         
      {!stats.totalGames ? (
      <p>Cargando estadísticas...</p>
      ) : (
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
          <p>{Number(stats.averageRating || 0).toFixed(1)}</p>
        </div>
        <div className="stat-card">
          <h3>🕒 Horas jugadas</h3>
          <p>{stats.totalHours}</p>
        </div>
      </div>
      )}
    </div>
  );
}

export default PersonalStats;
