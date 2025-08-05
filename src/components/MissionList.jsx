import React, { useMemo } from "react";
import { useMissions } from "../context/MissionContext";

const MissionItem = React.memo(({ mission }) => {
  return <li>{mission.name}</li>;
});

export default function MissionList({ searchTerm }) {
  const { missions } = useMissions();

  const filteredMissions = useMemo(() => {
    return missions.filter(m =>
      m.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [missions, searchTerm]);

  return (
    <ul>
      {filteredMissions.map(mission => (
        <MissionItem key={mission.id} mission={mission} />
      ))}
    </ul>
  );
}


