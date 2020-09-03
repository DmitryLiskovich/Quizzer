import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Requests } from '../../requests/requests';
import { QuizSettings } from './subcomponents/QuizSettings';
import { Question } from './subcomponents/Question';

export function CreateQuizz() {
  const [activeStep, setActiveStep] = useState('Settings');
  const requests = new Requests();

  const quiz = useSelector(state => state); 

  const sendQuiz = () => {
    requests.addQuiz(quiz);
  }

  return(
    <div className='signin quiz'>
      {activeStep === 'Settings' && <QuizSettings routState={setActiveStep}/>}
      {activeStep === 'Questions' && <Question routState={setActiveStep}/>}
      <button onClick={ sendQuiz } type='button'>Create Quiz</button>
    </div>
  )
}