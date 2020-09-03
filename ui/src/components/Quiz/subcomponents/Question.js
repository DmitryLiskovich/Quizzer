import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addQuestions } from '../redux/actions';

const fieldTemplate = {
  question: '',
  type: 'checkbox',
  details: '',
  answers: [],
}

export function Question({ routState }) {
  const [fields, setFields] = useState(fieldTemplate)
  const [questions, setQuestions] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  const reduxQuestions = useSelector(state => state.questions);

  useEffect(() => {
    if(reduxQuestions?.length) {
      setQuestions(reduxQuestions);
      setFields(reduxQuestions[currentId]);
    }
  }, []);

  useEffect(() => {
    if(questions.length) {
      if(questions[currentId]) {
        setFields(questions[currentId])
      } else {
        setFields(fieldTemplate);
      }
    }
  }, [currentId])
  
  const dispath = useDispatch();

  const addAnswer = () => {
    setFields((state) => ({...state, answers: [...state.answers, {
      placeholder: 'Enter answer',
      value: '',
      isCorrect: false
    }]}))
  }

  const deleteAnswer = (index) => {
    const newState = {...fields};
    newState.answers.splice(index, 1);
    setFields(newState);
  }

  const inputAnswer = (e) => {
    const newState = {...fields};
    newState.answers.length = 1;
    newState.answers[0].value = e.target.value;
    newState.answers[0].isCorrect = true;
    setFields(newState);
  }

  const inputChange = (e) => {
    e.persist();
    const newState = {...fields};
    newState[e.target.name] = e.target.value;
    setFields(newState);
  }

  const answerChange = (index, e) => {
    const newState = {...fields};
    newState.answers[index][e.target.name] = e.target.type !== 'text' ? e.target.checked : e.target.value;
    setFields(newState);
  }

  const addQuestion = (e) => {
    e.preventDefault();
    dispath(addQuestions(questions));
    setFields(fieldTemplate);
    setQuestions([...questions, fields])
    setCurrentId(state => state + 1);
  }

  const prevStep = () => {
    routState('Settings');
    dispath(addQuestions(questions));
  }

  return(
    <div className='question-details'>
    <h2>Questions</h2>
    <form onSubmit={addQuestion}>
      <label htmlFor='new-question-title' >Enter your question</label>
      <input 
        onChange={inputChange}
        name='question' 
        id='new-question-title' 
        type='text'
        value={fields.question}/>
      <label htmlFor='new-question-detail'>Enter more details (optional)</label>
      <textarea 
        onChange={inputChange}
        name='details'
        id='new-question-detail' 
        type='text' 
        value={fields.details}/>
      <label>Choose question type</label>
      <select onChange={inputChange} name='type' >
        <option defaultValue value='checkbox'>Checkbox</option>
        <option value='radio'>Radio</option>
        <option value='input'>Input</option>
      </select>
      <div className='signin-quiz-questions'>
        { fields.type !== 'input' && fields.answers.map((item, index) => 
          <div key={index}>
            <input name='value' onChange={(e) => answerChange(index, e)} placeholder={item.placeholder} value={item.value}/>
            <div className='answer-controll'>
              <div>
                <label htmlFor={`correct-item-${index}`}>Correct?</label>
                <input 
                  checked={item.isCorrect}
                  onChange={(e) => answerChange(index, e)} 
                  name='isCorrect'
                  id={`correct-item-${index}`} 
                  type={fields.type}/>
              </div>
              <svg onClick={() => deleteAnswer(index)}  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>
            </div>
          </div>
        )}
      </div>
      {fields.type === 'input' && 
        <div>
          <input 
            onChange={inputAnswer}
            placeholder={fields.answers[0]?.placeholder} 
            value={fields.answers[0]?.value}/>
        </div>
      }
      <div className='questions-controlls'>
        <div>
          <button onClick={addAnswer} type='button'>Add Answer</button>
          <button type='submit'>Add the Question</button>
        </div>
        <div>
          {currentId !== 0 && <button onClick={() => currentId > 0 && setCurrentId(currentId-1)} type='button'>Prev Question</button>}
          {currentId !== questions.length && <button onClick={() => questions.length && currentId < questions.length && setCurrentId(currentId+1)} type='button'>Next Question</button>}
        </div>
      </div>
    </form>
    <button onClick={prevStep} type='button'>Prev Step</button>
  </div>
  )
}