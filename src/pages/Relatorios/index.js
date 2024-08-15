import BotaoBuscar from "../../components/BotaoBuscar";
import { useReactToPrint } from 'react-to-print';
import Nav from "../../components/Nav";
import Subtitulo from "../../components/Subtitulo";
import Titulo from "../../components/Titulo";
import "./Relatorios.css";
import Print from "../../img/Print.png";
import { useEffect, useRef, useState } from "react";
import { getLogs } from "../../controllers/logs";
import { useNavigate } from "react-router-dom";

function Relatorios() {
  const [logs, setLogs] = useState([])
  const navigate = useNavigate()

  useEffect(fetchLogs, [navigate])
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "relatorio-detalhado",
    removeAfterPrint: true,
  });

  function fetchLogs() {
    getLogs().then(apiLogs => setLogs(apiLogs)).catch(e => {
      console.error(e)
      navigate("/")
    })
  }


  return (
    <div className="nav-container">
      <Nav />
      <div className="relatorios">
        <Titulo>Relatórios</Titulo>
        <Subtitulo>Consulte todas as alterações que já foram realizadas neste sistema.</Subtitulo>

        <div className="relatorios__form">
          <BotaoBuscar onClick={() => fetchLogs()} />
          <button  onClick={() => handlePrint(null, () => contentToPrint.current)}><img src={Print} alt="Imagem de impressora"/>  Imprimir</button>
        </div>

        <div className="caixa-tabela" ref={contentToPrint} >
          <div className="impressora">
            <h4>Relatório detalhado</h4>
          </div>

          <table >
            <thead>
              <tr>
                <th>Responsável</th>
                <th>Data</th>
                <th>Descrição</th>
                <th>Professor</th>
                <th>Disc./Turma</th>
                <th>De</th>
                <th>Para</th>
              </tr>
            </thead>
            <tbody>
              {
                logs.map((log, i) => (
                  <tr key={i}>
                    <td>{log.teacher.name}</td>
                    <td>{new Date(log.dateTime).toLocaleString()}</td>
                    <td>{log.description}</td>
                    <td>{log.class.teacher.name}</td>
                    <td>{log.class.code}</td>
                    <td>{log.periodOld}</td>
                    <td>{log.periodNew}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Relatorios;
