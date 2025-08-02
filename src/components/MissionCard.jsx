import React from 'react';

export default function MissionCard({ mission }) {
  return (
    <div className="mission-card">
      <h3>{mission.name}</h3>
      <p><strong>Fecha lanzamiento:</strong> {mission.launchDate}</p>
      <p><strong>Agencia:</strong> {mission.agency}</p>
      <p><strong>Estado:</strong> {mission.status}</p>
      <p>{mission.description}</p>
    </div>
  );
}
