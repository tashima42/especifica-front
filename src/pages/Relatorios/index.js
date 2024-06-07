import BotaoBuscar from "../../components/BotaoBuscar";
import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";
import "./Relatorios.css";
import Print from "../../img/Print.png";

function Relatorios() {
  return (
    <div className="nav-container">
      <Nav />
      <div className="relatorios">
        <Titulo>Relatórios</Titulo>
        <Subtitulo>Consulte todas as alterações que já foram realizadas neste sistema.</Subtitulo>

        <form className="relatorios__form">
          <div>
            <label>Tipo</label>
            <select>
              <option value="">-</option>
              <option value="troca-horario">Troca de horário</option>
              <option value="troca-sala">Troca de sala</option>
            </select>
          </div>

          <BotaoBuscar />
        </form>

        <div className="caixa-tabela">
          <div className="impressora">
            <h4>Relatório detalhado</h4>
            <button><img src={Print} alt="Imagem de impressora"/></button>
          </div>

          <table>
            <tr>
              <th>Responsável</th>
              <th>Data</th>
              <th>Tipo</th>
              <th>Professor</th>
              <th>Disc./Turma</th>
              <th>De</th>
              <th>Para</th>
              <th>De (Sala)</th>
              <th>Para (Sala)</th>
              <th></th>
            </tr>

            <tr>
              <td>Francisco Pereira</td>
              <td>2024-03-02 14:00:00</td>
              <td>Troca de horário (prof)</td>
              <td>Thiaga Ellen</td>
              <td>AS65A-N14</td>
              <td>5T2, 5T3</td>
              <td>6M1, 6M2</td>
              <td>P101</td>
              <td>-</td>
              <td><button className="botao-desfazer">Desfazer</button></td>
            </tr>

            <tr>
              <td>Francisco Pereira</td>
              <td>2024-03-02 14:00:00</td>
              <td>Troca de horário (prof)</td>
              <td>Thiaga Ellen</td>
              <td>AS65A-N14</td>
              <td>5T2, 5T3</td>
              <td>6M1, 6M2</td>
              <td>P101</td>
              <td>-</td>
              <td><button className="botao-desfazer">Desfazer</button></td>
            </tr>

            <tr>
              <td>Francisco Pereira</td>
              <td>2024-03-02 14:00:00</td>
              <td>Troca de horário (prof)</td>
              <td>Thiaga Ellen</td>
              <td>AS65A-N14</td>
              <td>5T2, 5T3</td>
              <td>6M1, 6M2</td>
              <td>P101</td>
              <td>-</td>
              <td><button className="botao-desfazer">Desfazer</button></td>
            </tr>

            <tr>
              <td>Francisco Pereira</td>
              <td>2024-03-02 14:00:00</td>
              <td>Troca de horário (prof)</td>
              <td>Thiaga Ellen</td>
              <td>AS65A-N14</td>
              <td>5T2, 5T3</td>
              <td>6M1, 6M2</td>
              <td>P101</td>
              <td>-</td>
              <td><button className="botao-desfazer">Desfazer</button></td>
            </tr>

            <tr>
              <td>Francisco Pereira</td>
              <td>2024-03-02 14:00:00</td>
              <td>Troca de horário (prof)</td>
              <td>Thiaga Ellen</td>
              <td>AS65A-N14</td>
              <td>5T2, 5T3</td>
              <td>6M1, 6M2</td>
              <td>P101</td>
              <td>-</td>
              <td><button className="botao-desfazer">Desfazer</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Relatorios;
