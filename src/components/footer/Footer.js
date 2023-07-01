import { Link } from "react-router-dom";
import facebook from "../../assets/FacebookLogo.svg"
import instagram from "../../assets/InstagramLogo.svg"
import linkedin from "../../assets/LinkedinLogo.svg"
import styled from "styled-components"

const Foot = styled.footer `
display: flex;
margin-left: 50px;
flex-direction: column;
justify-content: space-between;
background: #FFFFFF;
gap: 50px;
bottom: 0px;
position: fixed;
border-top: #B0E0D3 1px solid;
width: 93%;

  nav {
    display: flex;
    align-items: center;
    gap: 35px;
    margin-top: 50px;

    a {
      text-decoration: none;
      color: #1F1F1F;

    }:hover {
      color: #000;
    }
  }

  div {
    gap: 30px;
    display: flex;
  }

  p{
    font-family: Nunito;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #515151;
  }

`;




function Footer() {
    return (
      <Foot>
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
      </Foot>
    );
  }
  
  export default Footer;