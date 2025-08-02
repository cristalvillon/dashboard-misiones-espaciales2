import React, { useState, useEffect } from 'react';
import MissionList from '../components/MissionList';

export default function Home() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMissions() {
      try {
        const res = await fetch('https://api.spacexdata.com/v4/launches/upcoming');
        const data = await res.json();

        // Mapear datos relevantes
        const missionsData = data.map(mission => ({
          id: mission.id,
          name: mission.name,
          launchDate: mission.date_utc?.split('T')[0] || 'Fecha desconocida',
          agency: 'SpaceX',
          status: mission.upcoming ? 'Próximo' : 'Pasado',
          description: mission.details || 'Sin descripción',
        }));

        setMissions(missionsData);
      } catch (error) {
        console.error('Error fetching missions:', error);
        setMissions([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMissions();
  }, []);

  return (
    <div className="home">
      <h2>Misiones Espaciales Próximas (SpaceX)</h2>
      {loading ? (
        <p>Cargando misiones...</p>
      ) : missions.length === 0 ? (
        <p>No hay misiones para mostrar.</p>
      ) : (
        <MissionList missions={missions} />
      )}
    </div>
  );
}