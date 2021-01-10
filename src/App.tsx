import React, {useEffect} from 'react';
import './App.css';
import { getQuizDetails} from "./Services/getQuizDetails"

function App() {

  useEffect(() => {
    async function getData() {
      const data = await getQuizDetails(5, "easy")
      console.log(data)
    }
    getData();
  }, [])

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
