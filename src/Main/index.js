import React from 'react';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import BookDetail from '../screens/BookDetail';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import AuthRoute from './components/AuthRoute';

const Main = () => (
  <main>
    <Switch>
      <AuthRoute login path='/login' component={Login}/>
      <AuthRoute authenticated exact path='/dashboard' component={Dashboard}/>
      <AuthRoute authenticated path='/books/:id' component={BookDetail} />
      <Redirect from="/" to="/login" />
    </Switch>
  </main> 
)

export default Main;
