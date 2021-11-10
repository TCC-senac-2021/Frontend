import React from 'react';
import { VscArrowSmallRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './Header.css';

function Header () {

  return (
    <Link to="/"> 
    <div className='header'>
        <button className="fix"><img src={logo} alt="Logo" className="logo" /></button>
        <div className="info">
            Complete o Quiz <VscArrowSmallRight/> Ganhe Pontos <VscArrowSmallRight/> Converta em Descontos!
        </div>
    </div>
    </Link>
   
  
  );
}

export default Header;