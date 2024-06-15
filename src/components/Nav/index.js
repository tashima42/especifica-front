import "./Nav.css";
import Home from "../../img/Home.png";
import Clock from "../../img/Clock.png";
import MapMarker from "../../img/Map Marker.png";
import Person from "../../img/Person.png";
import Settings from "../../img/Settings.png";
import TestResults from "../../img/Test Results.png";
import Logout from "../../img/Logout.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="barra-lateral">
        <ul className="links">
          <div className="cima">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "item--ativo" : "item";
                }}
              >
                <img src={Home} alt="icone do inicio" />
                <p>Início</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mapa-de-salas"
                className={({ isActive }) => {
                  return isActive ? "item--ativo" : "item";
                }}
              >
                <img src={MapMarker} alt="icone do mapa" />
                <p>Mapa de salas</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mapa-de-professores"
                className={({ isActive }) => {
                  return isActive ? "item--ativo" : "item";
                }}
              >
                <img src={Person} alt="icone do mapa de professores" />
                <p>Mapa de professores</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/horarios"
                className={({ isActive }) => {
                  return isActive ? "item--ativo" : "item";
                }}
              >
                <img src={Clock} alt="icone do relogio" />
                <p>Horários</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/relatorios"
                className={({ isActive }) => {
                  return isActive ? "item--ativo" : "item";
                }}
              >
                <img src={TestResults} alt="icone do relatorio" />
                <p>Relatórios</p>
              </NavLink>
            </li>
          </div>
          <div className="baixo">
            <li>
                <NavLink
                  to="/configuracoes"
                  className={({ isActive }) => {
                    return isActive ? "item--ativo" : "item";
                  }}
                >
                  <img src={Settings} alt="icone de engrenagens" />
                  <p>Configurações</p>
                </NavLink>
              </li>
              <li className="item">
                <img src={Logout} alt="icone do logout" />
                <p>Logout</p>
              </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
