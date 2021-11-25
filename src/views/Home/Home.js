import React , { useState, useEffect } from 'react';
import RobotIconColor from '../../assets/robot.png';
import Loader from 'react-loader-spinner';
import Api from  '../../service/api';
import './Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Game from '../../components/Game/Game';


const Home = () => {
	
	const [name, setName] = useState();
	const [coupon, setNumberCoupon] = useState(true);
	const [loader, setLoader ] = useState(true);
	const [showElement, setShowElement] = useState(false);
	const [showAvatar, setShowAvatar] = useState(false);
	const [showcoupon, setCounPon] = useState(true);
	
	const handleClick = (e) => {
		setShowElement(true);
		setShowAvatar(false);
		e.preventDefault();	 	
	};

	useEffect(() => { 
		const idUser = new URLSearchParams(window.location.search).get('id'); 
		const campain = new URLSearchParams(window.location.search).get('campanha');

		async function loadUser(){
		await Api.post(`/start`,{
		id : idUser,
		nomeCampanha : campain
			}).then(response => {
				console.log(response.data)
				if(response.data.cupom) {
					setNumberCoupon(response.data.cupom)
					setLoader(false); 
				} else {
					setName(response.data.nome)
					setShowAvatar(true);
					setLoader(false); 
					setCounPon(false);	
				}
			})
		}
		loadUser();
	}, [])
	
	return  (
		
		<div className="content">
  			<Header />
			{ loader ? (  <Loader type="Circles" height={150} width={150}/>
			) : ( <> 
			{showcoupon ? (
			<div className='app fadein'>
				<div className='question-text'>
					Identificamos que você já jogou, seu cupom é:
				<div className="coupon">{ coupon }</div><br/>
				Acesse o link para dar um feedback sobre o jogo: 
				<a className="link" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd3NYdzfT9Gdk2tVYxQBPvda7rbIV3EniJmZT23A-Fhn-7hnQ/viewform" title="formulário google" target="_blank">
					Questionário
				</a>
				</div>
        	</div>
			) : ( null )}
			{showAvatar ? (
				<div className='avatar fadein'>
					<div key="{index}" className="bubble active"> Olá, {name.split(' ', 1).join(' ')}. <br/>Clique aqui para jogar!</div>
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