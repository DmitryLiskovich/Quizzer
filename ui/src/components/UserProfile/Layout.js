import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { routes } from './routes/routes';
export function UserProfile({match}) {
  // console.log(match.params.id)
  return(
    <HashRouter>
      <Switch>
        {routes.map((route, index) => 
          <Route 
            key={index}
            exact={route.path === '/' ? true : false} 
            path={route.path}
            component={route.component}
          />
          )
        }
      </Switch>
    </HashRouter>
  )
}