import React , { useState } from 'react';
import TypeIcons from '../../components/Utils/TypeIcons';
import './Game.css';

function Game (props) {

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false); // é só uma variavel de estado pra exibir o resultado

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

  return (
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
                <img src={icon} alt="Avatar" className="avatar-form"/> 
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
   
  
  );
}

export default Game;