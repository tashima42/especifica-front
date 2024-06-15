import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import MapaSalas from "./pages/MapaSalas";
import "./App.css";
import Header from "./components/Header";
import MapaProfessores from "./pages/MapaProfessores";
import Horarios from "./pages/Horarios";
import Relatorios from "./pages/Relatorios";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Configuracoes from "./pages/Configuracoes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" Component={Inicio} />
          <Route path="/mapa-de-salas" Component={MapaSalas} />
          <Route path="/mapa-de-professores" Component={MapaProfessores} />
          <Route path="/horarios" Component={Horarios} />
          <Route path="/relatorios" Component={Relatorios} />
          <Route path="/login" Component={Login} />
          <Route path="/configuracoes" Component={Configuracoes}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
