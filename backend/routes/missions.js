// backend/routes/missions.js
import { Router } from 'express';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

// Array temporal como "base de datos"
const misiones = [];

// Ruta para guardar una misión
router.post('/misiones', verifyToken, (req, res) => {
  const { name, date, status } = req.body;

  if (!name || !date || !status) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const nuevaMision = {
    id: misiones.length + 1,
    name,
    date,
    status,
    userId: req.user.id, // del token
  };

  misiones.push(nuevaMision);

  res.status(201).json({ message: 'Misión guardada', mission: nuevaMision });
});

export default router;
