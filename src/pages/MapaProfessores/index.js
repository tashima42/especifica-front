import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";

function MapaProfessores() {
    return (
        <div className="nav-container">
            <Nav />
            <div>
                <Titulo>Mapa de professor</Titulo>
                <Subtitulo>Consulte o mapa de aulas e permanências de um professor.</Subtitulo>
            </div>
        </div>
    )
}

export default MapaProfessores;