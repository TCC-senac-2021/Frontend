import React , { useState, useEffect } from 'react';
import RobotIconWhite from '../../assets/robot_form.png';
import Loader from 'react-loader-spinner';
import Api from  '../../service/api';
import './Game.css';


function Game () {

	const [questions, setQuestions] =  useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	//const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false); // é só uma variavel de estado pra exibir o resultado
	const [loader, setLoader ] = useState(true);
	const counQuestions = [1,2,3,4]
	const notCounpon = '??????????????'

	const handleAnswerOptionClick = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < counQuestions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	useEffect(() => { 

		async function loadarQuestions(){
			await Api.post(`/enviopergunta`,{
				idCampanha : 1 /** gambiarra pra pegar o id por enquanto */
			}).then(response => {
				setQuestions(response.data);
				setLoader(false);
			})
		}
		loadarQuestions();
		
	}, [])


  return (
	loader ? (  <Loader type="Circles" height={150} width={150}/>
	) : ( <> 
    <div className='app fade'>
    {showScore ? (
        <div className='score-section'>
            {/* <div> Você marcou {score} de {counQuestions.length} </div> */}
            <div> {score === 0 ? notCounpon : '' } </div>
        </div>
    ) : (
        <>
		
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
				<div className='answer-section'>
				{
					questions.map((question) => (
						question.id === currentQuestion + 1 &&
						<>
							<button onClick={() => handleAnswerOptionClick()}>{question.alternativa1}</button>
							<button onClick={() => handleAnswerOptionClick()}>{question.alternativa2}</button>
							<button onClick={() => handleAnswerOptionClick()}>{question.alternativa3}</button>
							<button onClick={() => handleAnswerOptionClick()}>{question.alternativa4}</button>
						</>
					))
				}

               {/*  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))} */}
            </div>
			
		</>
    )}
</div>
</> )
   
  
  );
}

export default Game;