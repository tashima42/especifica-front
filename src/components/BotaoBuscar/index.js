import "./BotaoBuscar.css";

function BotaoBuscar(props) {
  return (
    <button className="botao-buscar" onClick={props.onClick}>
      Buscar
    </button>
  );
}

export default BotaoBuscar;
