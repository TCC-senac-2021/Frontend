import React , { useState, useEffect } from 'react';
/* import QRCode from "react-qr-code"; */
import RobotIconWhite from '../../assets/robot_form.png';
import Loader from 'react-loader-spinner';
import Api from  '../../service/api';
import './Game.css';


function Game () {

	const campain = new URLSearchParams(window.location.search).get('campanha');
	const id = new URLSearchParams(window.location.search).get('id');
	
	const [questions, setQuestions] =  useState([]);
	const [answer, setAwnser] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [loader, setLoader ] = useState(true);
	const [resposta, setResposta] = useState([]);
	const [coupon, setCoupon] = useState();

	const counQuestions = [1,2,3,4]
	
	async function handleAnswerOptionClick (e) {
		e.preventDefault();
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < counQuestions.length ) {
			setCurrentQuestion(nextQuestion);
			await Api.post(`/conferepergunta`,{
				id : currentQuestion + 1,
				resposta 
			}).then(response => {
				if(response.data === true) {
					setAwnser(answer + 1);
				}
				
			})
		} else {
			await Api.post(`/conferepergunta`,{
				id : 4, 
				resposta
			}).then(response => {
				if(response.data === true) {
					setAwnser(answer + 1);
				}
				loadCoupon();
				setShowScore(true);
			})
			
		}
	};

	async function loadCoupon(){
		await Api.post(`/enviaCupom`,{
			id : id,
			nomeCampanha : campain,
			nroAcertos : answer
		}).then(response => {
			setCoupon(response.data)
		})
	}
	
	useEffect(() => { 

		const campain = new URLSearchParams(window.location.search).get('campanha');

		async function loadQuestions(){
			await Api.get(`/enviopergunta/${campain}`,{
			}).then(response => {
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
			Parabéns, você acertou { answer } de 4 questões, seu cupom é este: <br/>
			<div className="coupon">{ coupon }</div>
			{/* <QRCode width="100" value="hey" /> */}
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
							question.id === currentQuestion + 1 &&
								<div className='question-text'>{question.textoPergunta}</div>
								
							))
						}
				</div>
				{
					questions.map((question, index) => (
						question.id === currentQuestion + 1 &&
						<>
						<form className='answer-section fade' title="game" key={index} value={question.id} onSubmit={handleAnswerOptionClick}> 
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