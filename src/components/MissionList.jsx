
import React, { useMemo } from "react";

const MissionItem = React.memo(({ mission }) => {
  console.log("Renderizando misión:", mission.name);
  return <li>{mission.name}</li>;
});

export default function MissionList({ missions, searchTerm }) {
  const filteredMissions = useMemo(() => {
    return missions.filter(m =>
      mission.name.toLowerCase().includes(searchTerm.toLowerCase())
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

