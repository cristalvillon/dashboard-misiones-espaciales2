import React from 'react';

function MissionCard({ mission }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{mission.name}</h2>
      <p>Fecha de lanzamiento: {mission.launch_date}</p>
      <p>Descripción: {mission.description}</p>
    </div>
  );
}

export default MissionCard;
