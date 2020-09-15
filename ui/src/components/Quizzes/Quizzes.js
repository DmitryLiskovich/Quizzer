import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Requests } from '../../requests/requests';

export function Quizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const requests = new Requests;

  console.log(quizzes)

  useEffect(() => {
    (async () => {
      setQuizzes(await requests.getQuizzes().then(data => data.data.data));
    })();
  }, [])

  return(
    <div>
      <ul>
        {quizzes.map((item, index) => <li key={index}><Link to={'/quizzes/' + item._id}>{item.config.quiz_title}</Link></li>)}
      </ul>
    </div>
  )
}