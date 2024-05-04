import { Link } from "react-router-dom";
import "./Inicio.css";
import Cenary from "../../img/Cenary.png";
import Nav from "../../components/Nav";

function Inicio() {
  return (
    <div className="nav-container">
      <Nav />
      <div className="inicio">
        <div>
          <h1>Sistema de gestão de horários UTFPR</h1>
          <p>
            A interface interativa que irá facilitar as mudanças de turma de
            sala de aula, além dos horários dessas turmas e de professores!{" "}
          </p>
          <Link to="/mapa-de-salas" className="init">
            /init
          </Link>
        </div>
        <img src={Cenary} alt="ilustracao" />
      </div>
    </div>
  );
}

export default Inicio;
