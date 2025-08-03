// src/routes.js
export const routes = [
  { path: "/", component: Home, protected: false },
  { path: "/login", component: Login, protected: false },
  { path: "/registro", component: Registro, protected: false },
  { path: "/perfil", component: Perfil, protected: true },
  { path: "/dashboard", component: Dashboard, protected: true },
  { path: "/editar-mision/:id", component: EditarMision, protected: true },
];

// Rutas públicas extra
export const publicPaths = routes.filter(r => !r.protected).map(r => r.path);

// Rutas protegidas
export const privatePaths = routes.filter(r => r.protected).map(r => r.path);
