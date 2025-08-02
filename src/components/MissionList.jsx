import React from 'react';
import MissionCard from './MissionCard';

export default function MissionList({ missions }) {
  return (
    <div className="mission-list">
      {missions.map(mission => (
        <MissionCard key={mission.id} mission={mission} />
      ))}
    </div>
  );
}

