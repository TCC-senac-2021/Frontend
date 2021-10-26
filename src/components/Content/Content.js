import React, { useState } from 'react';
import './Content.css';

export default function Content() {
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
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
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
	);
}
