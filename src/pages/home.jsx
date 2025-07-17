import React from 'react';
import MissionList from '../components/MissionList';

const Home = () => {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>🚀 Misiones Espaciales</h1>
      <MissionList />
    </main>
  );
};

export default Home;
