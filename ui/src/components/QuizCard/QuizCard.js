import React from 'react';
import './card.scss';

export function QuizCard({question, id, setData}) {
  const [quizData, setQuizData] = setData;
  const copiedQuestion = {...quizData}
  const currentQ = copiedQuestion.questions[id];

  function onChange(item, e) {
    item.isSelected = !item.isSelected;
    setQuizData(copiedQuestion);
  }

  return(
    <div className='quiz-card'>
      <h2>{currentQ.question}</h2>
      <p>{currentQ.details}</p>
      <form>
        {currentQ.answers.map((item, index) => {
          const name = currentQ.type === 'radio' ? 'radio' : `${currentQ.type}-${index}`
          return(
            <div key={index}>
              <input checked={item.isSelected} onChange={(e) => onChange(item, e)} name={name} id={`quiz-${id}-${index}`} type={currentQ.type}></input>
              <label htmlFor={`quiz-${id}-${index}`}>{item.value}</label>
            </div>
          )
        })}
      </form>
    </div>
  )
}