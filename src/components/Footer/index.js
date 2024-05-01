import "./Footer.css";
import Logo from "../../img/logo-branca.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="rodape">
            <div className="rodape__logo">
                <img src={Logo} alt="Logotipo da UTFPR"/>
                <p>Av. Alberto Carazzai, 1640 - Centro, Cornélio Procópio - PR, 86300-000</p>
            </div>

            <div className="rodape__redes-sociais">
                <div>
                    <Link className="rede-social--icon" to="https://www.instagram.com/utfprcampuscornelio/"><FaInstagram /></Link>
                    <Link className="rede-social--icon" to="https://twitter.com/UtfprP"><FaTwitter /></Link>
                    <Link className="rede-social--icon" to="https://www.facebook.com/utfprcp"><FaFacebookF /></Link>
                </div>
                <p>alunos@alunos.utfpr.edu.br</p>
            </div>

            <div className="rodape__copyright">
                <span>2024 © companyLtd.  | Todos os direitos reservados</span>
            </div>
        </footer>
    )
}

export default Footer;