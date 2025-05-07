import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Sensores from './pages/Sensores';
import Ambientes from './pages/Ambiente';
import Historicos from './pages/Historico';

function PrivateRoute() {
  if (localStorage.getItem("token") != null) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<PrivateRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/sensores" element={<Sensores />} />
        <Route path="/ambientes" element={<Ambientes />} />
        <Route path="/historicos" element={<Historicos />} />
      </Routes>
    </Router>
  );
}

export default App;
