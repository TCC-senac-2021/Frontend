import React , { useState, useEffect } from 'react';
import RobotIconColor from '../../assets/robot.png';
import Loader from 'react-loader-spinner';
import Api from  '../../service/api';
import './Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Game from '../../components/Game/Game';


const Home = () => {

	const [client, setClient] =  useState([]);
	const [loader, setLoader ] = useState(true);
	const [showElement, setShowElement] = useState(false);
	const [showAvatar, setShowAvatar] = useState(true);

	const handleClick = (e) => {
		setShowElement(true);
		setShowAvatar(false);
		e.preventDefault();
	};

	useEffect(() => { // useEffect Ã© chamado quando inicia a tela

		async function loadClient(){
			await Api.get(`/usuarios`)// interpolaï¿½ï¿½o de acento
			.then(response => {
				setClient(response.data);
				setLoader(false);
				
			})
		}

		loadClient();

	}, [])
	
	
	return  (
		<div className="content">
  			<Header />
			{ loader ? (  <Loader type="Circles" height={150} width={150}/>
			) : ( <> 
			{showAvatar ? (
				<div className='avatar fadein'>
						{ client.map((clients, index) => ( /* // retirar o indice e fa\er a validaÃ§Ã£o depois	 */
							index === 1 &&  // gambis pra pegar id
							<div key="{index}" className="bubble active"> Olá, {clients.nome.split(' ').slice(-1).join(' ')}. <br/>Clique aqui para jogar!</div>
							))
						}	
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

// cliente vai na url do site

export default Home;