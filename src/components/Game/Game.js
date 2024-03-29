import React , { useState, useEffect } from 'react';
/* import QRCode from "react-qr-code"; */
import RobotIconWhite from '../../assets/robot_form.png';
import Loader from 'react-loader-spinner';
import Api from  '../../service/api';
import './Game.css';


function Game () {

	const campain = new URLSearchParams(window.location.search).get('campanha');
	const idUser = new URLSearchParams(window.location.search).get('id');
	
	const [questions, setQuestions] =  useState([]);
	const [answer, setAwnser] = useState(1);
	const [x, setX] =  useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [loader, setLoader ] = useState(true);
	const [resposta, setResposta] = useState([]);
	const [coupon, setCoupon] = useState();

	const percent1 = '5%';
	const percent2 = '5%';
	const percent3 = '10%';
	const percent4 = '15%';

	const counQuestions = [0,1,2,3]
	
	async function handleAnswerOptionClick (e) {
		e.preventDefault();
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < counQuestions.length ) {
			setCurrentQuestion(nextQuestion);
			await Api.post(`/conferepergunta`,{
				id : questions[currentQuestion].id,
				resposta, 
				idUsuario: idUser,
				nomeCampanha: campain
			}).then(response => {
				console.log(response.data)
				if(response.data === true) {
					setAwnser(answer + 1);
					setX(x + 1);
				}
				
			})
		} else {
			await Api.post(`/conferepergunta`,{
				id : questions[3].id, 
				resposta,
				idUsuario: idUser,
				nomeCampanha: campain
			}).then(response => {
				console.log(response.data)
				if(response.data === true) {
					setAwnser(answer + 1);
					setX(x + 1);
				}
				loadCoupon();
				setShowScore(true);
			})
			
		}
	};

	async function loadCoupon(){
		await Api.post(`/enviaCupom`,{
			id : idUser,
			nomeCampanha : campain,
			nroAcertos : answer
		}).then(response => {
			setCoupon(response.data)
			console.log(response.data)
		})
	}
	
	useEffect(() => { 

		const campain = new URLSearchParams(window.location.search).get('campanha');

		async function loadQuestions(){
			await Api.get(`/enviopergunta/${campain}`,{
			}).then(response => {
				console.log(response.data)
				setQuestions(response.data);
				setLoader(false);
			}).catch(response => {
				console.log(response.data.error)
			})
		}
		loadQuestions();
	}, [])

  return (
	
	loader ? (  <Loader type="Circles" height={150} width={150}/>
	) : ( <> 
    <div className='content'>
    {showScore ? (
        <div className='app fadein'>
			<div className='question-text'>
			{x >= 0 ? 'Você acertou ' + x +' de 4 questões' : 'Infelizmente você não acertou nenhuma resposta, mas não fique triste você vai ganhar um cupom por ter participado do jogo.'} <br/>
			Ganhou {x === 0 ? percent1 : x === 1 ? percent1 : x === 2 ? percent2 : x === 3 ? percent3 : x === 4 ? percent4 : '' } de desconto, seu cupom é esse:
			<div className="coupon">{ coupon }</div><br/>

			Acesse o link para dar um feedback sobre o quiz: 
			{/* <QRCode width="100" value="hey" /> */}
			<a className="link" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd3NYdzfT9Gdk2tVYxQBPvda7rbIV3EniJmZT23A-Fhn-7hnQ/viewform" title="formulário google" target="_blank">
				Questionário
			</a>
			</div>
        </div>
    ) : (
        <>
		 <div className='app fade'>
            <img src={RobotIconWhite} alt="Avatar" className="avatar-form"/> 
				<div className='question-section'>
					<div className='question-count'>
						<span>Pergunta {currentQuestion + 1}</span>
					</div>
						{ questions.map((question) => (
							question.numeroPergunta === currentQuestion + 1 &&
								<div className='question-text' title="text-question">{question.textoPergunta}</div>
								
							))
						}
				</div>
				{
					questions.map((question, index) => (
						question.numeroPergunta === currentQuestion + 1 &&
						<>
						<form className='answer-section fade' title="game" key={index} value={question.numeroPergunta} onSubmit={handleAnswerOptionClick}> 
							<button className="button" type="submit" value={question.alternativa1} onClick={e => setResposta(e.target.value)}>{question.alternativa1}</button>
							<button className="button" type="submit" value={question.alternativa2} onClick={e => setResposta(e.target.value)}>{question.alternativa2}</button>
							<button className="button" type="submit" value={question.alternativa3} onClick={e => setResposta(e.target.value)}>{question.alternativa3}</button>
							<button className="button" type="submit" value={question.alternativa4} onClick={e => setResposta(e.target.value)}>{question.alternativa4}</button>
            			</form>
						</>
					))
				}
		</div>	
		</>
    )}
  </div>
</> )
   
  
  );
}

export default Game;