import React, { useEffect, useState } from 'react';

function MissionList() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setMissions(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando misiones...</p>;

  return (
    <ul>
      {missions.map(m => (
        <li key={m.id}>
          {m.name} - {m.species}
        </li>
      ))}
    </ul>
  );
}

export default MissionList;
