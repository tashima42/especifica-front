import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";

function Horarios() {
  return (
    <div className="nav-container">
      <Nav />
      <div className="mapa-professores">
        <Titulo>Horários</Titulo>
        <Subtitulo>
          Consulte o horário das aulas de uma sala especifíca.
        </Subtitulo>
      </div>
    </div>
  );
}

export default Horarios;
