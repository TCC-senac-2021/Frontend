import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { VscArrowSmallRight } from "react-icons/vsc";


export default function Header() {

	return (
		<div className='header'>
		    <img src={logo} alt="Logo" />
             <div className="info">
             Complete o Quiz <VscArrowSmallRight/> Ganhe Pontos <VscArrowSmallRight/> Converta em Descontos!
             </div>
		</div>
       
	);
}
