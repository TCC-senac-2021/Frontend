import React , { useState, useEffect } from 'react';
import './Content.css';
import TypeIcons from '../Utils/TypeIcons';
import Api from  '../../service/api';

const Content = (props) => {

	const [client, setClient] =  useState([]);
	const [spinner, setSpinner ] = useState(true);


	async function loadClient(){
        await Api.get(`/usuarios`)// interpola��o de acento
        .then(response => {
            setClient(response.data);
             console.log(response.data); 
        })
	}
	
	async function loadQuestions(){
        await Api.get(`/perguntas`)// interpola��o de acento
        .then(response => {
            setClient(response.data);
             console.log(response.data); 
        })
    }
	
	const questions = [	
		{
			questionText: 'Qual a faculdade que te da mais desconto na próxima rematrícula?',
			answerOptions: [
				{ answerText: 'PUCRS', isCorrect: false },
				{ answerText: 'ULBRA', isCorrect: false },
				{ answerText: 'SENAC', isCorrect: true },
				{ answerText: 'UNIRITER', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a faculdade que te da mais desconto na próxima rematrícula?',
			answerOptions: [
				{ answerText: 'PUCRS', isCorrect: false },
				{ answerText: 'ULBRA', isCorrect: false },
				{ answerText: 'SENAC', isCorrect: true },
				{ answerText: 'UNIRITER', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a faculdade que te da mais desconto na próxima rematrícula?',
			answerOptions: [
				{ answerText: 'PUCRS', isCorrect: false },
				{ answerText: 'ULBRA', isCorrect: false },
				{ answerText: 'SENAC', isCorrect: true },
				{ answerText: 'UNIRITER', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a faculdade que te da mais desconto na próxima rematrícula?',
			answerOptions: [
				{ answerText: 'PUCRS', isCorrect: false },
				{ answerText: 'ULBRA', isCorrect: false },
				{ answerText: 'SENAC', isCorrect: true },
				{ answerText: 'UNIRITER', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [type, setType] = useState(0);
	const [showElement, setShowElement] = useState(false);
	const [showAvatar, setShowAvatar] = useState(true)

	const onSubmit = e => {
		setShowElement(true);
		setShowAvatar(false);
		e.preventDefault();
	};


	const notCounpon = 'Você não acertou nenhuma pergunta, tente jogar outra vez!'
	const couponOne = "Parabéns, Você recebeu um cupom de 5% de desconto!  'JKLMSTUVX'"
	const couponTwo = "Parabéns, Você recebeu um cupom de 10% de desconto! 'XVTUGBSKS'"
	const couponTree = "Parabéns, Você recebeu um cupom de 5% de desconto! 'ABABCHDNS'"



	
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	useEffect(() =>{
        loadClient();
		setTimeout(() => setSpinner(false), 1000)
    }, [])
	
	return  !spinner &&  (
		<div className="content">
		{showAvatar ? (
			<div className={!spinner ? 'avatar fadein' : 'avatar'}>
				<form onSubmit = {onSubmit} >
					{ client.map(clients => (
						<div className="bubble active"> Olá, {clients.nome.split(' ').slice(-1).join(' ')}. <br/>Clique em mim para jogar!</div>
						))
					}	
					{ TypeIcons.map((icon, index) => (
						index === 0 && 
						<button type="submit" key={index} onClick={() => setType.type = index }>
							<img src={icon} alt="Avatar" />
						</button>
						))
					}
				</form>
			</div>
			) : ( null )}
			{ showElement ? (
			<div className='app fade'>
				{showScore ? (
					<div className='score-section'>
						<div> Você marcou {score} de {questions.length} </div>
						<div> {score === 0 ? notCounpon : score === 1 ? couponOne : score === 2 ? couponOne : score === 3 ? couponTwo : score === 4 ? couponTree : '' } </div>
					</div>
				) : (
					<>
						{   TypeIcons.map((icon, index) => (
							index === 1 && 
							<img src={icon} alt="Avatar" className="pulse"/> 
                        	)) 
						}  
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		) : ( null )}
		</div>
	);
}

export default Content;