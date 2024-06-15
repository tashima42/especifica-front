import Nav from "../../components/Nav";
import Titulo from "../../components/Titulo";
import "./Configuracoes.css";
import { FaPen, FaEye, FaEyeSlash, FaRegTrashCan } from "react-icons/fa6";

function Configuracoes() {
    return (
        <div className="nav-container">
            <Nav />
            <div className="configuracoes">
                <Titulo>Configurações</Titulo>

                <div className="info-basicas">
                    <h4>Informações básicas</h4>
                    <form className="info-basicas__form">
                        <div className="campos">
                            <label htmlFor="tipo">Tipo</label>
                            <select id="tipo">
                                <option>Administrador</option>
                                <option>professor</option>
                            </select>
                        </div>

                        <div className="campos">
                            <label htmlFor="nome">Nome</label>
                            <div>
                                <input type="text" id="nome" />
                                <FaPen className="caneta" />
                            </div>
                        </div>

                        <div className="campos">
                            <label htmlFor="perfil">Foto de perfil</label>
                            <div>
                                <input type="file" id="perfil" />
                                <FaPen className="caneta" />
                            </div>
                            <button><FaRegTrashCan className="lixeira"/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Configuracoes;