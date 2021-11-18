import React , { useState, useEffect } from 'react';
import RobotIconColor from '../../assets/robot.png';
import Loader from 'react-loader-spinner';
import Api from  '../../service/api';
import './Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Game from '../../components/Game/Game';


const Home = () => {
	
	const id = new URLSearchParams(window.location.search).get('id');

	const [name, setName] = useState();
	const [loader, setLoader ] = useState(true);
	const [showElement, setShowElement] = useState(false);
	const [showAvatar, setShowAvatar] = useState(true);

	const handleClick = (e) => {
		setShowElement(true);
		setShowAvatar(false);
		e.preventDefault();
	};

	async function loadUser(){
		await Api.get(`/start/${id}`)
		.then(response => {
			setName(response.data.nome)
			setLoader(false);
		})
	}

	useEffect(() => { 
		loadUser();
	})
	
	return  (
		
		<div className="content">
  			<Header />
			{ loader ? (  <Loader type="Circles" height={150} width={150}/>
			) : ( <> 
			{showAvatar ? (
				<div className='avatar fadein'>
					<div key="{index}" className="bubble active"> Olá, {name.split(' ').slice(-1).join(' ')}. <br/>Clique aqui para jogar!</div>
					<button type="submit"onClick={handleClick}>
						<img src={RobotIconColor} alt="Avatar" className="pulse" />
					</button>			
				</div>
				) : ( null )}
				{ showElement ? (
				<Game />
			) : ( null )}
			<Footer />
			</> )}
		</div>
	);
}

//

export default Home;