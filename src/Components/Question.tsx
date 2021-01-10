import React, {useState} from 'react'
import { Question_Props_Type } from '../Types/Quiz_Types';

const Question: React.FC<Question_Props_Type> = ({question, options, callback}) => {
   const [answer, setAnswer] = useState("")
   return (
      <div>
         <div>
            <h4>{question}</h4>
         </div>
         <form onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e, answer)}>
            {options.map((option: string, index: number) => {
               return (
                  <div key={index}>
                     <label>
                        <input
                           type="radio"
                           required
                           value={option}
                           onChange={(e: any) => setAnswer(e.target.value)}

                        />
                        {option}
                     </label>
                  </div>
               )
            })}
            <input type="submit" />
         </form>

      </div>
   )
}

export default Question
