import { Link } from "react-router-dom";

function Error() {
    return (
      <div>
        <p>
        Error: Algo não esta certo.
        </p>
        <Link to="/">Clique aqui para voltar!</Link>
      </div>
    );
  }
  
  export default Error;