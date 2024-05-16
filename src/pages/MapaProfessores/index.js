import "./MapaProfessores.css";
import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";
import BotaoBuscar from "../../components/BotaoBuscar";

function MapaProfessores() {
  return (
    <div className="nav-container">
      <Nav />
      <div className="mapa-professores">
        <div className="titulo-subtitulo">
          <Titulo>Mapa de professor</Titulo>
          <Subtitulo>
            Consulte o mapa de aulas e permanências de um professor.
          </Subtitulo>
        </div>
        <div>
          <form>
            <div>
              <label>Nome</label>
              <select>
                <option value="">-</option>
                <option value="p">P</option>
                <option value="a">A</option>
              </select>
            </div>
            <div>
              <label>Professor</label>
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
            <BotaoBuscar />
          </form>
        </div>
        <div>
          <table
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <tbody>
              <tr>
                <td class="hora">&nbsp;</td>
                <td class="dias">
                  Segunda<div id="dv_seg">&nbsp;</div>
                </td>
                <td class="dias">
                  Terça<div id="dv_ter">&nbsp;</div>
                </td>
                <td class="dias">
                  Quarta<div id="dv_qua">&nbsp;</div>
                </td>
                <td class="dias">
                  Quinta<div id="dv_qui">&nbsp;</div>
                </td>
                <td class="dias">
                  Sexta<div id="dv_sex">&nbsp;</div>
                </td>
                <td class="dias">
                  Sábado<div id="dv_sab">&nbsp;</div>
                </td>
              </tr>
              <td class="tituloturno" colspan="7">
                Manhã
              </td>
              <tr class="manha">
                <td class="hora_manha">
                  <strong>M1</strong>
                  07:30
                </td>
                <td id="dv_2m1">&nbsp;</td>
                <td id="dv_3m1">&nbsp;</td>
                <td id="dv_4m1">&nbsp;</td>
                <td id="dv_5m1">&nbsp;</td>
                <td id="dv_6m1">&nbsp;</td>
                <td id="dv_7m1">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MapaProfessores;
