import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  const auth = req.headers.authorization?.split(' ')[1];
  if (!auth) return res.sendStatus(401);
  jwt.verify(auth, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.sendStatus(403);
    req.user = payload; // guarda info mínima (id, email)
    next();
  });
}

