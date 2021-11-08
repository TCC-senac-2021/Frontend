import React from 'react';
import { VscArrowSmallRight } from "react-icons/vsc";
import logo from '../../assets/logo.png';
import './Header.css';

function Header () {

  return (
    <div className='header'>
        <img src={logo} alt="Logo" className="logo" />
        <div className="info">
            Complete o Quiz <VscArrowSmallRight/> Ganhe Pontos <VscArrowSmallRight/> Converta em Descontos!
        </div>
    </div>
   
  
  );
}

export default Header;