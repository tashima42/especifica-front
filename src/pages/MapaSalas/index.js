import "./MapaSalas.css"
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";

function MapaSalas() {
    return(
        <div className="mapa-salas">
            <div className="titulo-subtitulo">
                <Titulo>Mapa de salas</Titulo>
                <Subtitulo>Consulte o status das salas utilizadas pelos cursos do DACOM</Subtitulo>
            </div>
        </div>
    )
}

export default MapaSalas;