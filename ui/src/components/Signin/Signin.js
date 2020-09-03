import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { useSpinner } from '../../hooks/spinner';
import { Requests } from '../../requests/requests';
import './signin.scss';

export function Signin() {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })
  const [errMessage, setErrMessage] = useState('');
  const [Spinner, setSpinner] = useSpinner();
  
  const history = useHistory();

  async function auth(e) {
    e.preventDefault();
    setSpinner(true);
    const requests = new Requests();
    try {
      const res = await requests.login(fields);
      localStorage.setItem('user', JSON.stringify(res.data.user))
      history.push('/');
      window.location.reload();
      setSpinner(false)
    } catch(e) {
      setErrMessage('Email or password is not correct');
      setSpinner(false)
    }
  }

  function change(e) {
    e.persist();
    const newFields = {...fields};
    newFields[e.target.name] = e.target.value;
    setFields(newFields);
  } 

  return(
    <>
      {Spinner && <Spinner/>}
      <div className='signin'>
        <h2 className='signin_title'>Sign in</h2>
        <form className='signin_form' onSubmit={auth}>
          {errMessage && <p className='signin_form_error'>{errMessage}</p>}
          <label htmlFor='email'>Email</label>
          <input onChange={change} value={fields.email} name='email' type='text' id='email'></input>
          <label htmlFor='password'>Password</label>
          <input onChange={change} value={fields.password} name='password' type='password' id='password'></input>
          <button type='submit'>Submit</button>
        </form>
        <p className='signin_sub-text'>Don't have an account? <Link to='/signup'>Signup</Link></p>
      </div>
    </>
  )
}