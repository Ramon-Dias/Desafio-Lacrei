import { Link } from "react-router-dom";
import styled from "styled-components"

const Erro = styled.div `
display: flex;
flex-direction: column;
background: #EEEEEE;
align-items: center;
  p{
    color: #000;
  }


    a {
      color: #1F1F1F;

    }:hover {
      color: #018762;
    }
  
`;

function Error() {
    return (
      <Erro>
        <p>
        Error: Algo não esta certo.
        </p>
        <Link to="/">Clique aqui para voltar!</Link>
      </Erro>
    );
  }
  
  export default Error;