import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Requests } from '../../requests/requests';
import { Search } from './components/Search';
import { quizzesList } from './components/quizzesList.js';
import './quizzes.scss';

export function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const requests = new Requests;

  console.log(quizzes)

  useEffect(() => {
    (async () => {
      setQuizzes(await requests.getQuizzes().then(data => data.data.data));
    })();
  }, [])

  return(
    <div className='quizzes-list'>
      <div className='quizzes-filter'>
        <Search data={quizzes} update={setFilteredList} />
        <div className='quizzes-filter__by-tag'>
          <h3>Search by tags</h3>
          <ul className='all-tags-list'>
            {quizzes.map(item => <li key={item._id}><Link to={'/quizzes?' + item.config.quiz_keywords}>{item.config.quiz_keywords}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className='qiuzzes-items'>
        <ul>
          {filteredList.length ? quizzesList(filteredList) : quizzesList(quizzes)}
        </ul>
      </div>
    </div>
  )
}