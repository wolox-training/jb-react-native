import React from 'react';
import Dashboard from '../screens/Dashboard';
import BookDetail from '../screens/BookDetail';
import { Switch, Route, Redirect } from 'react-router-dom'; 

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route path='/books/:id' component={BookDetail}/>
      <Redirect from="/" to="dashboard" />
    </Switch>
  </main> 
)

export default Main;
