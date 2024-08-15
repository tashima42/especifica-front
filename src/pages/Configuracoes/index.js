import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Titulo from "../../components/Titulo";
import "./Configuracoes.css";
import { FaPen, FaEye, FaEyeSlash } from "react-icons/fa6";
import { createLogin, getLogin, updateLogin } from "../../controllers/config";
import { useAuthentication } from "../../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Configuracoes() {
  const { logout } = useAuthentication();
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({})
  const [username, setUsername] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [mostrarNovaSenha2, setMostrarNovaSenha2] = useState(false);

  const [enableSave, setEnableSave] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [newAccountEnableSave, setNewAccountEnableSave] = useState(false)
  const [newAccountErrorMessage, setNewAccountErrorMessage] = useState("")

  const [tipo, setTipo] = useState("1")
  const [newAccountUsername, setNewAccountUsername] = useState("")
  const [newAccountPassword, setNewAccountPassword] = useState("")

  useEffect(() => {
    getLogin().then(l => {
      setUserInfo(l)
      setUsername(l.user)
    })
  }, [])

  useEffect(() => {
      const { valid, message } = validate() 
      setErrorMessage(message)
      setEnableSave(valid)
  }, [username, newPassword, repeatPassword, errorMessage, validate])

  useEffect(() => {
    updateNewAccountErrorMessage()
  }, [newAccountUsername, newAccountPassword, tipo, updateNewAccountErrorMessage])

  function toggleNovaSenha() {
      setMostrarNovaSenha(!mostrarNovaSenha);
  }

  function toggleNovaSenha2() {
      setMostrarNovaSenha2(!mostrarNovaSenha2);
  }

  function changeUserInfo() {
    const u =  { ...userInfo } // copy userInfo
    u.user = username
    if (newPassword !== "" && newPassword !== " ") {
      u.password = newPassword
    }
    setUserInfo(u)
    // send the update login request and logout user
    updateLogin(u).then(() => logout(navigate)).catch(e => console.error(e))
  }

  function createUser() {
    const login = {
      user: newAccountUsername,
      password: newAccountPassword,
      isAdmin: Number(tipo)
    }
    createLogin(login).then(() => alert("Conta criada!"))
  }

  function handleFormChange(setState, value) {
    console.log("value: " + value)
    setState(value)
  }


  function validate() {
    if (username === "" || username === " ") {
      return { valid: false, message: "Nome de usuário vazio"}
    }
    if (userInfo.user === username && (newPassword === "" || newPassword === " ")) {
      return { valid: false, message: "" }
    }
    if (newPassword !== "" && newPassword !== " ") {
      if (newPassword !== repeatPassword) {
        return { valid: false, message: "Senhas não coincidem"}
      }
    }
    return { valid: true, message: " " }
  }

  function updateNewAccountErrorMessage() {
    const { valid, message } = validateNewAccount() 
    setNewAccountErrorMessage(message)
    setNewAccountEnableSave(valid)
  }

  function validateNewAccount() {
    if (newAccountUsername === "" || newAccountUsername === " ") {
      return { valid: false, message: "Nome de usuário vazio"}
    }
    if (newAccountPassword === "" || newAccountPassword === " ") {
      return { valid: false, message: "Senha vazia"}
    }
    return { valid: true, message: " " }
  }

  return (
      <div className="nav-container">
          <Nav />
          <div className="configuracoes">
              <Titulo>Configurações</Titulo>

              <div className="editar-info">
                <div className="info-acesso">
                    <h4>Informações de acesso</h4>
                    <div className="info-acesso__form">
                        <div className="info-acesso__form--cima">
                            <div className="campos">
                                <label htmlFor="username">Nome de Usuário</label>
                                <div>
                                    <input type="string" id="username" value={username} onChange={e => handleFormChange(setUsername, e.target.value)} />
                                    <FaPen className="caneta" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="info-acesso__form--baixo">
                            <div className="campos">
                                <label htmlFor="nova-senha">Nova senha</label>
                                <div>
                                    <input type={mostrarNovaSenha ? "text" : "password"} id="nova-senha" value={newPassword} onChange={e => handleFormChange(setNewPassword, e.target.value)} />
                                    {
                                        mostrarNovaSenha ? <FaEye onClick={toggleNovaSenha}/> : <FaEyeSlash onClick={toggleNovaSenha}/>
                                    }
                                </div>
                            </div>

                            <div className="campos">
                                <label htmlFor="nova-senha2">Confirmar Nova senha</label>
                                <div>
                                    <input type={mostrarNovaSenha2 ? "text" : "password"} id="nova-senha2"  value={repeatPassword} onChange={e => handleFormChange(setRepeatPassword, e.target.value)}/>
                                    {
                                        mostrarNovaSenha2 ? <FaEye onClick={toggleNovaSenha2}/> : <FaEyeSlash onClick={toggleNovaSenha2}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="botao-salvar__container">
                    <p>{errorMessage}</p>
                    <button className={ enableSave ? "botao-salvar" : "botao-salvar disabled"} disabled={!enableSave} onClick={changeUserInfo}>Salvar</button>
                </div>
              </div>

              <div className="criar-conta">
                  <div className="criar-conta__caixa">
                      <h4 style={{marginBottom: "1em"}}>Criar uma conta</h4>
                      <div className="campos">
                          <label htmlFor="tipo-conta">Tipo</label>
                          <select id="tipo-conta" onChange={e => handleFormChange(setTipo, e.target.value)}>
                              <option value="1">Administrador</option>
                              <option value="0">Professor</option>
                          </select>
                      </div>

                      <div className="campos">
                          <label htmlFor="new-username">Nome de Usuário</label>
                          <div>
                              <input type="new-username" placeholder="Novo Nome de Usuário" onChange={e => handleFormChange(setNewAccountUsername, e.target.value)}/>
                          </div>
                      </div>

                      <div className="campos">
                          <label htmlFor="senha-conta">Senha</label>
                          <div>
                              <input type="password" placeholder="Crie uma senha para o usuário" onChange={e => handleFormChange(setNewAccountPassword, e.target.value)}/>
                          </div>
                      </div>
                  </div>
                  <div className="botao-salvar__container">
                      <p>{newAccountErrorMessage}</p>
                      <button type="submit" className={ newAccountEnableSave ? "botao-salvar" : "botao-salvar disabled"} disabled={!newAccountEnableSave} onClick={createUser}>Criar</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Configuracoes;
