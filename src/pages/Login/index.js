import { useState } from "react";
import "./Login.css";

function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);

    const baseUrl = "https://utf-api.tashima.space/Login/Authenticate";

    const urlWithParams = `${baseUrl}?username=${encodeURIComponent(
      username
    )}&password=${encodeURIComponent(password)}`;
    console.log(urlWithParams);
    try {
      const response = await fetch(urlWithParams, {
        method: "POST",
        mode: "no-cors",
      });
      console.log(response.json());
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
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
