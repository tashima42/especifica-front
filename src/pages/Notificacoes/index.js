import CardNotificacao from "../../components/CardNotificacao";
import Nav from "../../components/Nav";
import Titulo from "../../components/Titulo";
import "./Notificacoes.css";

function Notificacoes() {
    return (
        <div className="nav-container">
            <Nav />
            <div className="notificacoes">
                <Titulo>Notificações</Titulo>
                <div className="notificacoes-cards__container">
                    <CardNotificacao
                        tipo="aviso"
                        texto="AVISO! Aloque todas as aulas da turma N14 de “Algoritmos 1” em uma única sala! Salas atuais: “P105”, “P005”;"
                        isLida={true}
                    />
                    <CardNotificacao
                        tipo="check"
                        texto="Você alterou a turma N14 de “Algoritmos 1” de sala. (P005 > P105)"
                        isLida={true}
                    />
                    <CardNotificacao
                        tipo="check"
                        texto="Você alterou a turma N14 de “Algoritmos 1” de sala. (P005 > P105)"
                    />
                </div>
            </div>
        </div>
    )
}

export default Notificacoes;