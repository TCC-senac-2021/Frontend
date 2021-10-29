import React, { useState } from 'react';
import './Content.css';
import TypeIcons from '../Utils/TypeIcons';


export default function Content() {
	
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
	const [showElement, setShowElement] = useState(false);
	const [showAvatar, setShowAvatar] = useState(true)
	const [type, setType] = useState(0);

	const man = 'Homen';
	const woman = 'Mulher';
	const other = 'Outros';

	const notCounpon = 'Você não acertou nenhuma pergunta, tente jogar outra vez!'
	const couponOne = "Parabéns, Você recebeu um cupom de 5% de desconto!  'JKLMSTUVX'"
	const couponTwo = "Parabéns, Você recebeu um cupom de 10% de desconto! 'XVTUGBSKS'"
	const couponTree = "Parabéns, Você recebeu um cupom de 5% de desconto! 'ABABCHDNS'"


	const onSubmit = e => {
		setShowElement(true);
		setShowAvatar(false);
		e.preventDefault();
	};
	
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

	console.log(setType.type);
	
	return (
		<div className="content">

         {showAvatar ? (
			<div className='avatar'>
				<form onSubmit = {onSubmit}>
				{
					TypeIcons.map((icon, index) => ( //pego o incide do vetor e substituo a imagem
					index > 0 && 
					<button type="submit" key={index} onClick={() => setType.type = index }>
						<span className="sex"> {index === 1 ? man : index === 2 ? woman : index === 3 ? other : ''} </span>
						<img src={icon} alt="Avatar" className={type && type !== index && 'inative'}/> 
					</button>
					))
					
				}
				</form>
			</div>
			) : ( null )}
			{ showElement ? (
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						<div> Você marcou {score} de {questions.length} </div>
						<div> {score === 0 ? notCounpon : score === 1 ? couponOne : score === 2 ? couponOne : score === 3 ? couponTwo : score === 4 ? couponTree : '' } </div>
					</div>
				) : (
					<>
						{   TypeIcons.map((icon, i) => (
							i === setType.type &&
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
