import { FaEllipsis, FaCheck, FaRegTrashCan, FaTriangleExclamation, FaCircleCheck } from "react-icons/fa6";
import "./CardNotificacao.css";
import { useState } from "react";

function CardNotificacao({ tipo, isLida, texto }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={isLida ? "card-notificacao--lida" : "card-notificacao"}>
            <div className="card-notificacao__conteudo">
                {
                    tipo === "aviso" ? <FaTriangleExclamation style={{color: "#fac61f"}} className="card-notificacao__icon"/>
                    :
                    <FaCircleCheck style={{color: "green"}} className="card-notificacao__icon"/>
                }
                <p>{texto}</p>
            </div>
            <div className="card-notificacao__acoes">
                <button onClick={toggleIsOpen} className={isLida ? "elipse--lida" : "elipse"}><FaEllipsis /></button>
                <div style={{
                    display: isOpen ? "flex" : "none",
                    flexDirection: "column"
                }} className="card-notificacao__acoes--botoes">
                    <button>
                        <FaCheck />
                        Lido
                    </button>
                    <button>
                        <FaRegTrashCan />
                        Excluir
                    </button>
                </div>
                <span>2 minutos atras</span>
            </div>
        </div>
    )
}

export default CardNotificacao;