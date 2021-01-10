export type Quiz_Type = {
   category: string
   correct_answer: string
   difficulty: string
   incorrect_answers: string[]
   question: string
   type: string
}

export type Question_Type = {
   question: string
   answer: string
   options: string[]
}