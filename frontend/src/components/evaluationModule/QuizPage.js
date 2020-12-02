import React from "react";

import { useState } from "react";


import "./QuizPage.css";

export default function QuizPage( ) {

	const questions = [

		{   
			
			questionText: "What is the capital of India?",
			answerOptions: [
					{answerText:"Mumbai",isCorrect:false},
					{answerText:"Kolkata",isCorrect:false},
					{answerText:"Kerala",isCorrect:false},
					{answerText:"New Delhi",isCorrect:true},
			],
		},
		{
			questionText: "What is the capital of Australia?",
			answerOptions: [
					{answerText:"Sydney",isCorrect:true},
					{answerText:"Melbourne",isCorrect:false},
					{answerText:"Canberra",isCorrect:false},
					{answerText:"Brisbane",isCorrect:false},
	
			],
		},
		{  
			
			questionText: "What is the capital of USA?",
			answerOptions: [
					{answerText:"Chicago",isCorrect:false},
					{answerText:"Washington DC",isCorrect:true},
					{answerText:"San fransisco",isCorrect:false},
					{answerText:"New york",isCorrect:false},
			],
		},
	
		{
			
			questionText: "What is the capital of France?",
			answerOptions: [
					{answerText:"Paris",isCorrect:true},
					{answerText:"Lyon",isCorrect:false},
					{answerText:"Nice",isCorrect:false},
					{answerText:"Rouen",isCorrect:false},
			],
		},
	
		{
			
			questionText: "What is the capital of Sweden?",
			answerOptions: [
					{answerText:"Malmo",isCorrect:false},
					{answerText:"Gothenberg",isCorrect:false},
					{answerText:"Stockholm",isCorrect:true},
					{answerText:"Vastraland",isCorrect:false},
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
		<div >
			{showScore ? (
				<div className='font-finalscore'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
				    
					<div>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='.correct' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					
				</>
			)}
		</div>
    );
}