import Logo from "../../img/logo.png"
import { FaMagnifyingGlass as Lupa } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import FotoPerfil from "../../img/pic-profile.png";
import "./Header.css"

function Header() {
    return (
        <header className="cabecalho">
            <div className="esquerdo">
                <img src={Logo} alt="Logo da UTFPR"/>
                <div>
                    <input placeholder="O que você procura?" type="text"/>
                    <button><Lupa /></button>
                </div>
            </div>
            <div className="direito">
                <FaRegBell className="sino"/>
                <div className="perfil">
                    <div>Cristina rocha</div>
                    <img src={FotoPerfil} alt="Foto de perfil"/>
                </div>
            </div>
        </header>
    )
}

export default Header;