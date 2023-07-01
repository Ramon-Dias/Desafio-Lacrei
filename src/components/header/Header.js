import { Link } from "react-router-dom";
import styled from "styled-components"

const Head = styled.header `
display: flex;
justify-content: space-between;
background: #EEEEEE;

  h1{
    margin-left: 50px;
    color: #018762;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 35px;
    margin-right: 50px;

    a {
      text-decoration: none;
      color: #1F1F1F;

    }:hover {
      color: #018762;
    }
  }
`;

function Header() {
    return (
      <Head>
        <h1>Lacrei</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/usuario">Usuario</Link>
          <Link to="/profissional">Profissional</Link>
        </nav>
      </Head>
    );
  }
  
  export default Header;