import React , { useState, useEffect } from 'react';
import TypeIcons from '../../components/Utils/TypeIcons';
import Api from  '../../service/api';
import './Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Game from '../../components/Game/Game';

const Home = () => {

	const [client, setClient] =  useState([]);
	const [spinner, setSpinner ] = useState(true);
	const [showElement, setShowElement] = useState(false);
	const [showAvatar, setShowAvatar] = useState(true);

	const handleClick = (e) => {
		setShowElement(true);
		setShowAvatar(false);
		e.preventDefault();
	};


	useEffect(() => { // useEffect é chamado quando inicia a tela

		async function loadClient(){
			await Api.get(`/usuarios`)// interpola��o de acento
			.then(response => {
				setClient(response.data);
				console.log(response.data); 
			})
		}


		loadClient();
		setTimeout(() => setSpinner(false), 1500);

	}, [])
	
	
	return  !spinner &&  (
		<div className="content">
  			<Header />
			{showAvatar ? (
				<div className={!spinner ? 'avatar fadein' : 'avatar'}>
			
						{ client.map((clients, indice) => ( /* // retirar o indice e fa\er a validação depois	 */
							indice === 0 && 
							<div className="bubble active"> Olá, {clients.nome.split(' ').slice(-1).join(' ')}. <br/>Clique aqui para jogar!</div>
							))
						}	
						{ TypeIcons.map((icon, index) => (
							index === 0 && 
							<button type="submit" key={index} onClick={handleClick}>
								<img src={icon} alt="Avatar" className="pulse" />
							</button>
							))
						}
			
				</div>
				) : ( null )}
				{ showElement ? (
				<Game />
			) : ( null )}
			<Footer />
		</div>
	);
}

// cliente vai na url do site

export default Home;