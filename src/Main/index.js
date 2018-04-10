import React from 'react';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import BookDetail from '../screens/BookDetail';
import { Switch, Route, Redirect } from 'react-router-dom'; 

const Main = () => (
  <main>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route path='/books/:id' component={BookDetail}/>
      <Redirect from="/" to="/login" />
    </Switch>
  </main> 
)

export default Main;
