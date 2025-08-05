import React, { createContext, useState, useContext } from "react";

const MissionContext = createContext();

export function MissionProvider({ children }) {
  const [missions, setMissions] = useState([]);

  const addMission = (mission) => {
    setMissions(prev => [...prev, mission]);
  };

  return (
    <MissionContext.Provider value={{ missions, addMission }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMissions() {
  return useContext(MissionContext);
}
