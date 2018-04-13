import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 

const AuthRoute = ({ component: Component, authenticated, notAuthenticated, login , ...rest }) => {
  return <Route {...rest} render={(props) => (
    (!!authenticated) === !!localStorage.getItem('isAuthenticated') ?
      <Component {...props} />
      : (!!login) === !!localStorage.getItem('isAuthenticated') && !(!!authenticated) ? 
      <Redirect to={{
          pathname: '/dashbaord' 
        }} /> : <Redirect to={{
          pathname: '/login'
        }} />
  )} />
}

export default AuthRoute;
