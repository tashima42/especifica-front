import { useState } from "react";
import Nav from "../../components/Nav";
import Titulo from "../../components/Titulo";
import "./Configuracoes.css";
import { FaPen, FaEye, FaEyeSlash, FaRegTrashCan } from "react-icons/fa6";

function Configuracoes() {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
    const [mostrarNovaSenha2, setMostrarNovaSenha2] = useState(false);

    function toggleSenha() {
        setMostrarSenha(!mostrarSenha);
    }

    function toggleNovaSenha() {
        setMostrarNovaSenha(!mostrarNovaSenha);
    }

    function toggleNovaSenha2() {
        setMostrarNovaSenha2(!mostrarNovaSenha2);
    }

    return (
        <div className="nav-container">
            <Nav />
            <div className="configuracoes">
                <Titulo>Configurações</Titulo>

                <form className="editar-info">
                    <div className="info-basicas">
                        <h4>Informações básicas</h4>
                        <div className="info-basicas__form">
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
                        </div>
                    </div>

                    <div className="info-acesso">
                        <h4>Informações de acesso</h4>
                        <div className="info-acesso__form">
                            <div className="info-acesso__form--cima">
                                <div className="campos">
                                    <label htmlFor="email">E-mail</label>
                                    <div>
                                        <input type="email" id="email" />
                                        <FaPen className="caneta" />
                                    </div>
                                </div>

                                <div className="campos">
                                    <label htmlFor="senha">Senha</label>
                                    <div>
                                        <input type={mostrarSenha ? "text" : "password"} id="senha" />
                                        {
                                            mostrarSenha ? <FaEye onClick={toggleSenha}/> : <FaEyeSlash onClick={toggleSenha}/>
                                        }
                                    </div>
                                </div>
                            </div>
                            
                            <div className="info-acesso__form--baixo">
                                <div className="campos">
                                    <label htmlFor="nova-senha">Nova senha</label>
                                    <div>
                                        <input type={mostrarNovaSenha ? "text" : "password"} id="nova-senha" />
                                        {
                                            mostrarNovaSenha ? <FaEye onClick={toggleNovaSenha}/> : <FaEyeSlash onClick={toggleNovaSenha}/>
                                        }
                                    </div>
                                </div>

                                <div className="campos">
                                    <label htmlFor="nova-senha2">Confirmar Nova senha</label>
                                    <div>
                                        <input type={mostrarNovaSenha2 ? "text" : "password"} id="nova-senha2" />
                                        {
                                            mostrarNovaSenha2 ? <FaEye onClick={toggleNovaSenha2}/> : <FaEyeSlash onClick={toggleNovaSenha2}/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="botao-salvar__container">
                        <button type="submit" className="botao-salvar">Salvar</button>
                    </div>
                </form>

                <form className="criar-conta">
                    <div className="criar-conta__caixa">
                        <h4 style={{marginBottom: "1em"}}>Criar uma conta</h4>
                        <div className="campos">
                            <label htmlFor="tipo-conta">Tipo</label>
                            <select id="tipo-conta">
                                <option>Administrador</option>
                                <option selected="true">Professor</option>
                            </select>
                        </div>

                        <div className="campos">
                            <label htmlFor="nome-conta">Nome</label>
                            <div>
                                <input type="text" placeholder="Digite o nome do usuário"/>
                            </div>
                        </div>

                        <div className="campos">
                            <label htmlFor="email-conta">E-mail</label>
                            <div>
                                <input type="email" placeholder="Cadastre o e-mail do usuário"/>
                            </div>
                        </div>

                        <div className="campos">
                            <label htmlFor="senha-conta">Senha</label>
                            <div>
                                <input type="password" placeholder="Crie uma senha para o usuário"/>
                            </div>
                        </div>
                    </div>
                    <div className="botao-salvar__container">
                        <button type="submit" className="botao-salvar">Criar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Configuracoes;