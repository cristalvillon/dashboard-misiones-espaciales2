// routes/auth.js
import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

// Simulando base de datos con una contraseña hasheada
const hashedPassword = bcrypt.hashSync('pass123', 10);
const users = [{ id: 1, username: 'user1', password: hashedPassword }];

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
});

// Ruta protegida
router.get('/perfil', verifyToken, (req, res) => {
  res.json({ id: req.user.id, username: req.user.username });
});

export default router;
