import Logo from "../../img/logo.png";
import { FaMagnifyingGlass as Lupa } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import FotoPerfil from "../../img/pic-profile.png";
import "./Header.css";
import Notificacao from "../Notificacao";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="cabecalho">
      <div className="esquerdo">
        <img src={Logo} alt="Logo da UTFPR" onClick={() => window.location.reload()}/>
        <div>
          <input placeholder="O que você procura?" type="text" />
          <button>
            <Lupa />
          </button>
        </div>
      </div>
      <div className="direito">
        <FaRegBell className="sino" onClick={toggleIsOpen}/>
        <div className="caixa-notificacoes" style={{display: isOpen ? "flex" : "none"}}>
          <div className="caixa-notificacoes__container">
            <Notificacao tipo="aviso" texto="AVISO! Aloque todas as aulas da turma N14 de “Algoritmos 1” em uma única sala! Salas atuais: “P105”, “P005”;"/>
            <Notificacao tipo="check" texto="Você alterou a turma N14 de “Algoritmos 1” de sala. (P005 > P105)”;"/>
            <Link to="/notificacoes" className="botao-ver-todas">Ver todas</Link>
          </div>
        </div>
        <div className="perfil">
          <div>Cristina rocha</div>
          <img src={FotoPerfil} alt="Foto de perfil" />
        </div>
      </div>
    </header>
  );
}

export default Header;
