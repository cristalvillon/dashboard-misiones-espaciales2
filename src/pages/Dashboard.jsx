
import React, { useState } from "react";
import MissionList from "../components/MissionList";

export default function Dashboard() {

  const [missions] = useState([
    { id: 1, name: "Exploración Lunar" },
    { id: 2, name: "Colonización Marte" },
    { id: 3, name: "Estudio de asteroides" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard - Página protegida</h2>

      <input
        type="text"
        placeholder="Buscar misión"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 15, padding: 8, width: "100%", maxWidth: 300 }}
      />

      <MissionList missions={missions} searchTerm={searchTerm} />
    </div>
  );
}

