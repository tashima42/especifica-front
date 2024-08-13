import { useState } from "react";
import "./Login.css";
import { useAuthentication } from "../../components/Context/AuthContext";

function Login() {
  const { login } = useAuthentication();
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    await login({ username: username, password: password });
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Entrar</h1>
        <h6>Faça login para acessar o site</h6>

        <form>
          <div className="float-label">
            <label>Usuário</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>

          <div className="float-label">
            <label>Senha</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isChecked ? "text" : "password"}
            />
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="mostrar"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="mostrar">Mostrar senha</label>
          </div>

          <div className="login__botoes">
            <button onClick={handleLogin} type="submit">
              Entrar
            </button>
            <span>Não tem conta?</span>
            <a href="*">Saiba como acessar!</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
