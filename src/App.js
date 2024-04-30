import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import MapaSalas from "./pages/MapaSalas";
import './App.css'
import Header from "./components/Header";
import Nav from "./components/Nav";
import MapaProfessores from "./pages/MapaProfessores";
import Horarios from "./pages/Horarios";
import Relatorios from "./pages/Relatorios";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="nav-container">
          <Nav />
          <Routes>
            <Route path="/" Component={Inicio}/>
            <Route path="/mapa-de-salas" Component={MapaSalas}/>
            <Route path="/mapa-de-professores" Component={MapaProfessores}/>
            <Route path="/horarios" Component={Horarios}/>
            <Route path="/relatorios" Component={Relatorios}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
