import React from 'react';
import { Link } from 'react-router-dom';

export const quizzesList = (data) => {
  return(
    <ul className="quizzes-list__items">
      {data.map((item, index) => (
        <li key={index}>
          <Link to={'/quizzes/' + item._id}>{item.config.quiz_title}</Link>
          <ul className='tags'>
            <li><Link to={'/quizzes?' + item.config.quiz_keywords}>{item.config.quiz_keywords}</Link></li>
          </ul>
        </li>))}
    </ul>
  )
}