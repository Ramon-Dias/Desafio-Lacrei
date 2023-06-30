import { Link } from "react-router-dom";
import rafiki2 from '../../assets/rafiki2.svg';

function Home() {
    return (
      <section>
        <div>
          <h2>
          Boas vindas a Lacrei Saúde
          </h2>
          <p>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </p>
          <div>
            <Link to="/usuario">Pessoa Usuária</Link>
            <Link to="/profissional">Profissional</Link>
          </div>
        </div>
        
          <img alt="vetor medica" src={rafiki2}/>
        
      </section>
    );
  }
  
  export default Home;