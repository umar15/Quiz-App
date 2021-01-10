import { Question_Type, Quiz_Type } from "./../Types/Quiz_Types";

const shuffleArray = (array: any[]) =>
	[...array].sort(() => Math.random() - 0.5);

export const getQuizDetails = async (
	totalQuestions: number,
	level: string
): Promise<Question_Type[]> => {
	const response = await fetch(
		`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`
	);
	let { results } = await response.json();
	const data: Question_Type[] = results.map((questionsObj: Quiz_Type) => {
		const { question, correct_answer, incorrect_answers } = questionsObj;
		return {
			question: question,
			answer: correct_answer,
			options: shuffleArray(incorrect_answers.concat(correct_answer)),
		};
	});
	return data;
};
