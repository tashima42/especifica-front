import { useState } from "react";
import "./Login.css";

function Login() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="login-container">
      <div className="login">
        <h1>Entrar</h1>
        <h6>Faça login para acessar o site</h6>

        <form>
          <div className="float-label">
            <label>Usuário</label>
            <input type="text" />
          </div>

          <div className="float-label">
            <label>Senha</label>
            <input type={isChecked ? "text" : "password"} />
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
            <button type="submit">Entrar</button>
            <span>Não tem conta?</span>
            <a href="*">Saiba como acessar!</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
