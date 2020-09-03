import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  const user = JSON.parse(localStorage.getItem('user'));

  return(
    <div className='header-top'>
      <div className='header-top__notification'></div>
      <div className='header-top__user-info'>
        <p className='header-top__user-info_welcome'>Welcome, {user ? user.f_name + ' ' + user.l_name : 'Guest'} </p>
        <Link to='/user-profile'>
          <div className='header-top__user-info_user-img'></div>
        </Link>
      </div>
    </div>
  )
}