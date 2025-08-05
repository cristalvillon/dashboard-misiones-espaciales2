// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import missionRoutes from './routes/missions.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Ruta básica para probar que el backend funciona
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando 🚀');
});

// Usar rutas de autenticación
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
