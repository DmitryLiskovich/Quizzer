import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Header } from './Header/Header';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './Quiz/redux/reducer';
import { routes } from '../routes/routes';
import './layout.scss';

export function Layout() {
  const store = createStore(reducer);

  return(
    <HashRouter>
      <Header/>
      <div className='layout-wrapper'>
        <Navbar/>
        <div className='route-wrapper'>
          <div className='route-wrapper_content'>
            <Provider store={store}>
              <Switch>
                {routes.map((route, index) => 
                    (route.isPublic || localStorage.getItem('user'))
                    && (!localStorage.getItem('user') || !route.notForRegistred)
                    && <Route 
                      key={index}
                      exact={route.path === '/' ? true : false} 
                      path={route.path}
                      component={route.component}
                    />
                  )
                }
                <Redirect to='/'/>
              </Switch>
            </Provider>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}