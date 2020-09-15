import React, { useEffect, useState } from 'react';
import { Requests } from '../../requests/requests';
import { QuizCard } from '../QuizCard/QuizCard';

export function Quiz({match}) {
  const [quizData, setQuizData] = useState({});
  const requests = new Requests;

  console.log(quizData);
  
  useEffect(()=>{
    ( async ()=>{
      const result = await requests.getQuiz(match.params.id).then(data => data.data.data);
      setQuizData(result);
    })()
  }, [])

  return(
    <div>
      {quizData.questions?.map((item, index) => <QuizCard id={index} key={index} question={item}/>)}
    </div>
  )
}