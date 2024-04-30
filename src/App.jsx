import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import MapaSalas from "./pages/MapaSalas";
import './App.css'
import Header from "./components/Header";
import Nav from "./components/Nav";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
