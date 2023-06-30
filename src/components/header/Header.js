import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <h1>Lacrei</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/usuario">Usuario</Link>
          <Link to="/profissional">Profissional</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;