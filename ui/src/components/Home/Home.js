import React from 'react';
import { useHistory } from 'react-router-dom';
import './home.scss';

export function Home() {
  const history = useHistory();

  function createNewQuizzBtn() {
    if(localStorage.getItem('user')) {
      history.push('/new-quiz');
    } else {
      history.push('/signin');
    }
  }

  return(
    <div className='home-page'>
      <h1 className='home-page_title'>Welcome to Quizzer.</h1>
      <h2 className='home-page_desc'>Do you wanna <button type='button' onClick={createNewQuizzBtn}>create</button> a new quiz?</h2>
      <p className='home-page_text'>You can pass all opened quiz or create your own.</p>
      <p className='home-page_text'>If you wanna save and share you quiz, you need to login or create new accout.</p>
    </div>
  )
}