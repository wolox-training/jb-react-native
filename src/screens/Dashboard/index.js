import React, { Component } from 'react';
import './style.css';
import BooksList from './components/BookList';
import Filters from './components/Filters';

class Dashboard extends Component {
  render() {
    return (
      <div>  
        <Filters />
        <BooksList />
      </div>
    );
  }
}

export default Dashboard;
