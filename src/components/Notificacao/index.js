import "./Notificacao.css";
import { FaTriangleExclamation, FaCircleCheck } from "react-icons/fa6";

function Notificacao({ tipo, texto }) {
    return (
        <div className="notificacao">
            {
                tipo === "aviso" ? 
                    <FaTriangleExclamation style={{color: "#fac61f"}} className="notificacao__icon"/> 
                : 
                    <FaCircleCheck style={{color: "green"}}  className="notificacao__icon"/>
            }
            <div className="notificacao__conteudo">
                <p>{texto}</p>
                <span>2 minutos atras</span>
            </div>
        </div>
    )
}

export default Notificacao;