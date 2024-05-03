import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";

function Relatorios() {
    return(
        <div className="nav-container">
            <Nav />
            <div>
                <Titulo>Relatórios</Titulo>
                <Subtitulo>Pagina de relatorios</Subtitulo>
            </div>
        </div>
    )
}

export default Relatorios;