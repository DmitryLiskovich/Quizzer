import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../redux/actions';

export function QuizSettings({ routState }) {
  const [quizConfig, setQuizConfig] = useState({
    quiz_title: '',
    quiz_expire: '',
    quiz_size: '',
    quiz_keywords: '',
    quiz_get_res: false,
    quiz_public: false,
  })

  const configRedux = useSelector(state => state.config);

  useEffect(() => {
    if(configRedux) {
      setQuizConfig(configRedux);
    }
  }, [])
  
  const dispatch = useDispatch();

  const quizChange = (e) => {
    e.persist();
    const newState = {...quizConfig};
    const type = e.target.getAttribute('data-type');
    if(type && type === 'number') {
      if(+e.target.value === +e.target.value){
        newState[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      }
    } else {
      newState[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    }
    setQuizConfig(newState);
  }

  const sendQuizSetting = () => {
    routState('Questions');
    dispatch(addData(quizConfig));
  }

  return(
    <div className='quiz-details'>
      <h2>Quiz Settings</h2>
      <label htmlFor='quiz_title'>Quiz Title</label>
      <input onChange={quizChange} value={quizConfig.quiz_title} type='text' name='quiz_title' id='quiz_title'></input>
      <label htmlFor='quiz_size'>Expire Time (h)</label>
      <input onChange={quizChange} value={quizConfig.quiz_expire} data-type='number' type='text' name='quiz_expire' id='quiz_expire'></input>
      <label htmlFor='quiz_size'>Max size of Questions in a Quiz</label>
      <input onChange={quizChange} value={quizConfig.quiz_size} data-type='number' name='quiz_size' type='text' id='quiz_size'></input>
      <label htmlFor='quiz_size'>Quiz's Keywords</label>
      <input onChange={quizChange} value={quizConfig.quiz_keywords} name='quiz_keywords' type='text' id='quiz_keywords'></input>
      <label htmlFor='quiz_public'>Don't Show this Quiz in Search?</label>
      <input onChange={quizChange} checked={quizConfig.quiz_public} name='quiz_public' type='checkbox' id='quiz_public'></input>
      <label htmlFor='quiz_get_res'>Do You Wanna Get Results on Your Email?</label>
      <input onChange={quizChange} checked={quizConfig.quiz_get_res} name='quiz_get_res' type='checkbox' id='quiz_get_res'></input>
      <button onClick={sendQuizSetting} type='button'>Next Step</button>
    </div>
  )
}