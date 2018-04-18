import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import { checkAuth } from '../src/services/AuthService';

class App extends Component {
  render() {
    return (
      <div>
        { checkAuth() && <Header /> }
        <Main />
      </div>
    );
  }
}

export default App;
  