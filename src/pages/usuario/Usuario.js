import rafiki1 from '../../assets/rafiki1.svg';
import styled from "styled-components"

const Usuarios = styled.section `
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
    border-left: #018762 5px solid;
    padding-left: 20px;
    font-family: Nunito;
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;    
    width: 55%  
  }


`;

function Usuario() {
    return (
      <Usuarios>
      <div>
        <h2>
        Pessoa Usuária
        </h2>
        <p>
        A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
        </p>
      </div>
      
        <img alt="vetor medica" src={rafiki1}/>
      
    </Usuarios>
    );
  }
  
  export default Usuario;