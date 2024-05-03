import "./MapaSalas.css"
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";
import BotaoBuscar from "../../components/BotaoBuscar";
import CardSala from "../../components/CardSala";
import Nav from "../../components/Nav";

function MapaSalas() {
    return(
        <div className="nav-container">
            <Nav />
            <div className="mapa-salas">
                <div className="titulo-subtitulo">
                    <Titulo>Mapa de salas</Titulo>
                    <Subtitulo>Consulte o status das salas utilizadas pelos cursos do DACOM</Subtitulo>
                </div>

                <form>
                    <div>
                        <label>Bloco</label>
                        <select>
                            <option value="">-</option>
                            <option value="p">P</option>
                            <option value="a">A</option>
                        </select>
                    </div>

                    <div>
                        <label>Dia da semana</label>
                        <select>
                            <option value="">-</option>
                            <option value="segunda">Segunda-feira</option>
                            <option value="terça">Terça-feira</option>
                            <option value="quarta">Quarta-feira</option>
                            <option value="quinta">Quinta-feira</option>
                            <option value="sexta">Sexta-feira</option>
                            <option value="sabado">Sábado</option>
                            <option value="domingo">Domingo</option>
                        </select>
                    </div>

                    <div>
                        <label>Período</label>
                        <select>
                            <option value="">-</option>
                            <option value="manha">Manhã</option>
                            <option value="tarde">Tarde</option>
                            <option value="noite">Noite</option>
                        </select>
                    </div>

                    <BotaoBuscar />
                </form>

                <div className="caixa-salas">
                    <h4>Selecione uma sala para checar seus Horários</h4>
                    <div className="salas">
                        <CardSala sala="001" capacidade={40} disciplina="AS65A" docente="Thiaga Ellen" alunos={40} turma="N15" status="Em uso"/>
                        <CardSala sala="002" capacidade={40} disciplina="AS65A" docente="Thiaga Ellen" alunos={40} turma="N15" status="Indisponível"/>
                        <CardSala sala="003" capacidade={30} disciplina="AS65A" docente="Joze" alunos="28" turma="N15" status="Em uso"/>
                        <CardSala sala="004" capacidade={50} disciplina="-" docente="-" alunos="-" turma="-" status="Disponível"/>
                    </div>
                </div>

                <div className="legendas">
                    <div className="legendas__em-uso">
                        <div></div>
                        <p>Em uso</p>
                    </div>
                    <div className="legendas__disponiveis">
                        <div></div>
                        <p>Disponível</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapaSalas;