import React, {useEffect, useState} from 'react';
import './App.css';
import { getQuizDetails} from "./Services/getQuizDetails"
import { Question_Type } from './Types/Quiz_Types';
import Question from "./Components/Question"

function App() {
  const [quiz, setQuiz] = useState<Question_Type[]>([]);
  let [currentQuestion, setCurrentQuestion] = useState<number>(0); 

  useEffect(() => {
    async function getData() {
      const data: Question_Type[] = await getQuizDetails(5, "easy")
      setQuiz(data);
    }
    getData();
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAnswer: string) => {
    e.preventDefault();
    console.log("Submitted")
    setCurrentQuestion(++currentQuestion)
  }

  if (!quiz.length) {
    return <h4>Loading ...</h4>
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
