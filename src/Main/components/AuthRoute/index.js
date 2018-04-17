import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 
import { checkAuth } from '../../../services/AuthService';

const AuthRoute = ({ component: Component, authenticated, notAuthenticated, login , ...rest }) => {
  let logged = checkAuth();
  return <Route {...rest} render={ (props) => (
    (authenticated && !logged) ?
      <Redirect to={{ pathname: '/login' }} />
    : (notAuthenticated && logged) ? 
      <Redirect to={{ pathname: '/dashboard' }} />
    : <Component {...props} />
  )} />
}

export default AuthRoute;
