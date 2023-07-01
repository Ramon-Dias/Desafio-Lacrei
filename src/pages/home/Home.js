import { Link } from "react-router-dom";
import rafiki2 from '../../assets/rafiki2.svg';
import styled from "styled-components"

const Inicio = styled.section `
display: flex;
justify-content: space-between;
margin-top: 50px;
margin-right: 50px;
margin-left: 50px;

  h2{
    font-family: Nunito;
    font-size: 48px;
    font-weight: 700;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: left;
    width: 80%    
  }

  p {
    font-family: Nunito;
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;    
    width: 55%  
  }

  a {
    text-decoration: none;
    color: #1F1F1F;
  }

  nav {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 75%;

    a {
      border: #018762 1px solid;
      padding: 20px 50px;
      border-radius: 5px
    }:hover {
      background: #018762;
      color: #fff
    }
  }

`;


function Home() {
    return (
      <Inicio>
        <div>
          <h2>
          Boas vindas a Lacrei Saúde
          </h2>
          <p>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </p>
          <nav>
            <Link to="/usuario">Pessoa Usuária</Link>
            <Link to="/profissional">Profissional</Link>
          </nav>
        </div>
        
          <img alt="vetor medica" src={rafiki2}/>
        
      </Inicio>
    );
  }
  
  export default Home;