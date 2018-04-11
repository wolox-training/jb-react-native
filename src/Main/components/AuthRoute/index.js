import React from 'react';
import { Route, Redirect } from 'react-router-dom'; 

const AuthRoute = ({ component: Component, login, authenticated, ...rest }) => {
  let bool = 'true';
  let pathname = '/login'; 

  if (login) {
    bool = 'false';
    pathname = '/dashboard'
  }

  return <Route {...rest} render={(props) => (
    localStorage.getItem('isAuthenticated') === bool?
      <Component {...props} />
      : <Redirect to={{
          pathname,
          state: { from: props.location }
        }} />
  )} />
}

export default AuthRoute;
