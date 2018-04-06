import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard';
import BookDetail from '../BookDetail';

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
