import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetails } from "./Services/getQuizDetails";
import { Question_Type } from "./Types/Quiz_Types";
import Question from "./Components/Question";

function App() {
	const [quiz, setQuiz] = useState<Question_Type[]>([]);
	let [currentQuestion, setCurrentQuestion] = useState<number>(0);
	let [score, setScore] = useState<number>(0);
	const [showQuiz, setShowQuiz] = useState<boolean>(false);
	const [showResult, setShowResult] = useState<boolean>(false);

	useEffect(() => {
		async function getData() {
			const data: Question_Type[] = await getQuizDetails(5, "easy");
			setQuiz(data);
		}
		getData();
	}, []);

	const handleSubmit = (
		e: React.FormEvent<EventTarget>,
		userAnswer: string
	) => {
		e.preventDefault();

		if (userAnswer === quiz[currentQuestion].answer) {
			setScore(++score);
		}

		if (currentQuestion === quiz.length - 1) {
			console.log("quiz completed, your score is " + score);
			setCurrentQuestion(0);
			setScore(0);
			setShowResult(true);
		} else {
			setCurrentQuestion(++currentQuestion);
		}
	};

	if (!quiz.length) {
		return <h4>Loading ...</h4>;
	}

	if (!showQuiz) {
		return (
			<div>
				<h1>Quiz App</h1>
				<button
					onClick={() => {
						setShowQuiz(true);
						setShowResult(false);
					}}
				>
					Start Quiz
				</button>
			</div>
		);
	}

	if (showResult) {
		return (
			<div>
				<h3>Your Score: {score}</h3>
				<button
					onClick={() => {
						setShowResult(false);
						setShowQuiz(false);
					}}
				>
					Try Again
				</button>
			</div>
		);
	}

	return (
		<div>
			<h1>Quiz App</h1>
			<Question
				question={quiz[currentQuestion].question}
				options={quiz[currentQuestion].options}
				callback={handleSubmit}
			/>
		</div>
	);
}

export default App;
