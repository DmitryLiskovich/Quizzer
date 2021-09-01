import React, { useEffect, useState } from 'react';
import { Requests } from '../../requests/requests';
import { QuizCard } from '../QuizCard/QuizCard';
import { Modal, Button } from '@material-ui/core';
import './quiz.scss';

export function Quiz({match}) {
  const [quizData, setQuizData] = useState({});
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(false);
  const requests = new Requests;

  console.log(quizData)
  
  useEffect(()=>{
    ( async ()=>{
      const result = await requests.getQuiz(match.params.id).then(data => data.data.data);
      result.questions.forEach(element => {
        element.answers.forEach(item => {
          item.isSelected = false;
        })
      });
      setQuizData(result);
    })()
  }, [])

  function finishQuiz() {
    setModal(true);
  }

  return(
    <div className='quiz-wrapper'>
      <Modal
        open={modal}
        className='modal-frame'
      >
        <div className='modal-frame__wrapper'>
          <h2>Are you sure?</h2>
          <Button className='reject' variant="contained" onClick={() => setModal(false)}>No</Button>
          <Button className='success' color="success" variant="contained">Yes</Button>
        </div>
      </Modal>
      {quizData.questions && <QuizCard id={current} setData={[quizData, setQuizData]} question={quizData.questions[current]}/>}
      <div className='indicators'>
        { current > 0 && <Button type='button' onClick={() => current > 0 ? setCurrent(current - 1) : current}>Previous</Button>}
        {quizData.questions?.map((i, ind) => <Button key={ind} onClick={() => setCurrent(ind)} className={`${ind === current ? 'active' : ''}`}>{ind+1}</Button>)}
        {current < quizData.questions?.length -1 && 
          <Button type='button' onClick={() => current < quizData.questions?.length -1 ? setCurrent(current + 1) : current}>{'Next'}</Button>}
        {current === quizData.questions?.length -1 && <Button onClick={finishQuiz} type='button'>Finish</Button>}
      </div>
    </div>
  )
}