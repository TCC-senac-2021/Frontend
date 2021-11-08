import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

function Footer () {

  return (
    <div className='footer'>
        <div className="lgpd">
        Respeitamos a sua privacidade
        Ao navegar neste site, você aceita os cookies que usamos para melhorar sua experiência. Conheça nossa <Link to="/privacy" className="link"> Política de Privacidade</Link>
        </div>
       <div className="copyright">Copyright &copy; 2021 Converta. Todos os direitos reservados.</div>
  </div>
   
  
  );
}

export default Footer;