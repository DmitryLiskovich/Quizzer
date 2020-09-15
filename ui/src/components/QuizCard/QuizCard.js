import React from 'react';

export function QuizCard({question, id}) {
  return(
    <div>
      <h2>{question.question}</h2>
      <p>{question.details}</p>
      <form>
        {question.answers.map((item, index) => {
          const name = question.type === 'radio' ? 'radio' : `${question.type}-${index}`
          return(
            <div key={index}>
              <label htmlFor={`quiz-${id}-${index}`}>{item.value}</label>
              <input name={name} id={`quiz-${id}-${index}`} type={question.type}></input>
            </div>
          )
        })}
      </form>
    </div>
  )
}