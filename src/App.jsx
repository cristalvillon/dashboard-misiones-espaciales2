import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RequireAuth from './components/RequireAuth';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import MissionForm from './components/MissionForm';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route element={<RequireAuth />}>
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/agregar-mision" element={<MissionForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
 