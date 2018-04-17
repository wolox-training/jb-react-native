import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import { checkHeader } from '../src/services/AuthService';

class App extends Component {
  render() {
    return (
      <div>
        { checkHeader() && <Header /> }
        <Main />
      </div>
    );
  }
}

export default App;
  