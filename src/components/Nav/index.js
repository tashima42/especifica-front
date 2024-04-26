import "./Nav.css"
import Home from "../../img/Home.png"
import Clock from "../../img/Clock.png"
import MapMarker from "../../img/Map Marker.png"
import Person from "../../img/Person.png"
import Settings from "../../img/Settings.png"
import TestResults from "../../img/Test Results.png"
import Logout from "../../img/Logout.png"

function Nav() {
    return (
        <nav className="barra-lateral">
            <ul className="links">
                <div className="cima">
                    <li className="item item--ativo">
                        <img src={Home} alt="icone do inicio"/>
                        <p>Início</p>
                    </li>
                    <li className="item">
                        <img src={MapMarker} alt="icone do mapa"/>
                        <p>Mapa de salas</p>
                    </li>
                    <li className="item">
                        <img src={Person} alt="icone do mapa de professores"/>
                        <p>Mapa de professores</p>
                    </li>
                    <li className="item">
                        <img src={Clock} alt="icone do relogio"/>
                        <p>Horários</p>
                    </li>
                    <li className="item">
                        <img src={TestResults} alt="icone do relatorio"/>
                        <p>Relatórios</p>
                    </li>
                </div>
                <div className="baixo">
                    <li className="item">
                        <img src={Settings} alt="icone das configurações"/>
                        <p>Configurações</p>
                    </li>
                    <li className="item">
                        <img src={Logout} alt="icone do logout"/>
                        <p>Logout</p>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav;