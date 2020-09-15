import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import './navbar.scss';

export function Navbar() {
  const signOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.reload();
  }

  return(
    <header className='header'>
      <nav className='header__nav'>
        <div className='header__nav_home-link'>
          <Link to='/'>QUIZZER</Link>
        </div>
        <ul className='header__nav_navigation-list'>
          {routes.map((item, index) => 
            (item.isPublic || localStorage.getItem('user'))
            && (!localStorage.getItem('user') || !item.notForRegistred)
            && item.path !== '/' 
            && !item.notInMenu && <li key={index}><Link to={item.path}>{item.name}</Link></li>
          )}
          {localStorage.getItem('user') && <li><a href='' onClick={signOut}>Sign out</a></li>}
        </ul>
      </nav>
    </header>
  )
}