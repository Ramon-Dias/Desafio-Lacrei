import { Link } from "react-router-dom";
import facebook from "../../assets/FacebookLogo.svg"
import instagram from "../../assets/InstagramLogo.svg"
import linkedin from "../../assets/LinkedinLogo.svg"

function Footer() {
    return (
      <footer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/usuario">Usuario</Link>
          <Link to="/profissional">Profissional</Link>
        </nav>
        <div>
          <img src={facebook} alt="Facebook Logo"/>
          <img src={instagram} alt="Instagram Logo"/>
          <img src={linkedin} alt="Linkedin Logo"/>
        </div>
        <p>Desafio Front-end Lacrei</p>
      </footer>
    );
  }
  
  export default Footer;