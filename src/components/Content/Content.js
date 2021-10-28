import React, { useState } from 'react';
import './Content.css';
import TypeIcons from '../Utils/TypeIcons';


export default function Content(props) {
	
	const questions = [	
		{
			questionText: 'Qual a faculdade te da mais desconto na próxima rematrícula?',
			answerOptions: [
				{ answerText: 'PUCRS', isCorrect: false },
				{ answerText: 'ULBRA', isCorrect: false },
				{ answerText: 'SENAC', isCorrect: true },
				{ answerText: 'UNIRITER', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a faculdade te da mais desconto na próxima rematrícula?',
			answerOptions: [
				{ answerText: 'PUCRS', isCorrect: false },
				{ answerText: 'ULBRA', isCorrect: false },
				{ answerText: 'SENAC', isCorrect: true },
				{ answerText: 'UNIRITER', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a faculdade te da mais desconto na próxima rematrícula?',
			answerOptions: [
				{ answerText: 'PUCRS', isCorrect: false },
				{ answerText: 'ULBRA', isCorrect: false },
				{ answerText: 'SENAC', isCorrect: true },
				{ answerText: 'UNIRITER', isCorrect: false },
			],
		},
		{
			questionText: 'Qual a faculdade te da mais desconto na próxima rematrícula?',
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
	const [type] = useState();

	const man = 'Homen';
	const woman = 'Mulher';
	const other = 'Outros';

	const handleAvatar = (index) => {
		setShowElement(true);
		setShowAvatar(false);
		return index;
	}
  
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

	/* const setTypeIcon = handleAvatar(index);
	console.log(setTypeIcon)
	 */
	return (
		<div className="content">

         {showAvatar ? (
			<div className='avatar'>
				{
					TypeIcons.map((icon, index) => ( //pego o incide do vetor e substituo a imagem
					index > 0 && 
					<button type="button" key={index} onClick={() => handleAvatar(index)}>
					<span className="sex"> {index === 1 ? man : index === 2 ? woman : index === 3 ? other : ''} </span>
					<img src={icon} alt="Avatar" className={type && type !== index && 'inative'}/> 
					</button>
					))
					
				}
			</div>
			) : ( null )}
			{ showElement ? (
			<div className='app'>

					{ /*  TypeIcons.map((icon, index) => (
						index > 0 && 
						<img src={icon} alt="Avatar" className={type && type !== index && 'inative'}/> 
                        )) 
					*/ }  

				{showScore ? (
					<div className='score-section'>
						Você marcou {score} de{questions.length}
					</div>
				) : (
					<>
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
