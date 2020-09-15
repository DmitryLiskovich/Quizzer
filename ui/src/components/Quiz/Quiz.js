import React, { useEffect, useState } from 'react';
import { Requests } from '../../requests/requests';
import { QuizCard } from '../QuizCard/QuizCard';
import './quiz.scss';

export function Quiz({match}) {
  const [quizData, setQuizData] = useState({});
  const [current, setCurrent] = useState(0);
  const requests = new Requests;
  
  useEffect(()=>{
    ( async ()=>{
      const result = await requests.getQuiz(match.params.id).then(data => data.data.data);
      setQuizData(result);
    })()
  }, [])

  return(
    <div className='quiz-wrapper'>
      {quizData.questions && <QuizCard id={current} question={quizData.questions[current]}/>}
      <div className='indicators'>
        {quizData.questions?.map((i, ind) => <div key={ind} className={`indicator ${ind < current ? 'passed' : ''} ${ind === current ? 'active' : ''}`}>{ind}</div>)}
        <button type='button' onClick={() => current < quizData.questions?.length -1 ? setCurrent(current + 1) : current}>{current < quizData.questions?.length-1 ? 'Next' : 'Finish'}</button>
      </div>
    </div>
  )
}