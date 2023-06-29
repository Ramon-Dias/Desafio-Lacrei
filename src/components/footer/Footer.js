import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/usuario">Usuario</Link>
          <Link to="/profissional">Profissional</Link>
        </nav>
        <div>
          <img src="../../assets/FacebookLogo.svg" alt="Facebook Logo"/>
          <img src="../../assets/InstagramLogo.svg" alt="Instagram Logo"/>
          <img src="../../assets/LinkedinLogo.svg" alt="Linkedin Logo"/>
        </div>
        <p>Desafio Front-end Lacrei</p>
      </footer>
    );
  }
  
  export default Footer;