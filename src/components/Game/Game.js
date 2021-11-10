import React , { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import RobotIconWhite from '../../assets/robot_form.png';
import Loader from 'react-loader-spinner';
import Api from  '../../service/api';
import './Game.css';


function Game () {

	const [redirect] = useState(false);
	const [questions, setQuestions] =  useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [loader, setLoader ] = useState(true);

	const [answer, setAnswer] = useState();

	


	// const [alternative1, setAlternative1] = useState("");
    // const [alternative2, setAlternative2] = useState("");
    // const [alternative3, setAlternative3] = useState("");
	// const [alternative4, setAlternative4] = useState("");
	
	const counQuestions = [1,2,3,4]
	
	async function handleAnswerOptionClick (e) {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < counQuestions.length ) {
			setCurrentQuestion(nextQuestion);
			await Api.post(`/conferepergunta`,{
				id : currentQuestion + 1, // full gambis
				answer
			}).then(response => {
				console.log(response.data)
			})
		} else {
			await Api.post(`/conferepergunta`,{
				id : currentQuestion + 1, // full gambis
				answer
			}).then(response => {
				console.log(response.data)
			})
			setShowScore(true);
		}
	};
	
	useEffect(() => { 

		async function loadQuestions(){
			await Api.post(`/enviopergunta`,{
				idCampanha : 1,  /** gambiarra pra pegar o id por enquanto */
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
	{redirect && <Redirect to="/coupon" /> }
    {showScore ? (
        <div className='score-section'>
            ??
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
						<form className='answer-section' key={index} value={question.id} onSubmit={handleAnswerOptionClick}> 
							<button type="submit" value={question.alternativa1} onChange={e => setAnswer(e.target.value)}>{question.alternativa1}</button>
							<button type="submit" value={question.alternativa2} onChange={e => setAnswer(e.target.value)}>{question.alternativa2}</button>
							<button type="submit" value={question.alternativa3} onChange={e => setAnswer(e.target.value)}>{question.alternativa3}</button>
							<button type="submit" value={question.alternativa4} onChange={e => setAnswer(e.target.value)}>{question.alternativa4}</button>
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