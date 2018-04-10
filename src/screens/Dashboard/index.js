import React, { Component } from 'react';
import books from '../../constants/books';
import './style.css';
import logo from '../../assets/search.svg';
import BooksList from './components/BookList/index';

class Dashboard extends Component {
  state = {
    value: '',
    filter: '',
    submittedValue: '',
    submittedFilter: ''
  }  
  
  handleSelectChange = (event) => {
    this.setState({ filter: event.target.value});
  }

  handleInputChange = (event) => {
    this.setState({ value: event.target.value});
  }

  handleClick = (event) => {
    if (event.key === 'Enter' | event.type === 'click') {
      this.setState({submittedValue: this.state.value, submittedFilter: this.state.filter });    
    }
  }

  filterList() {
    if (this.state.submittedFilter === '') {
      return books;
    }
    
    return books.filter (book => book[this.state.submittedFilter].toLowerCase().includes(this.state.submittedValue.toLowerCase()));
  }

  render() {
    return (
      <div>  
        <div className="display-wrap">
          <select className="filter filter-margin" name="filter" value={this.state.filter} onChange={this.handleSelectChange}>
            <option value="" selected>Seleccionar filtro</option>
            <option value="title">Nombre</option>
            <option value="author">Autor</option>
          </select>
          <div>
            <input className="filter" name="value" value={this.state.value} onChange={this.handleInputChange} onKeyPress={this.handleClick} placeholder="Buscar..."></input>
            <button className="search" onClick={this.handleClick}><img src={logo} alt="logo"/></button>
          </div>
        </div>
        <BooksList books={this.filterList()}/>
      </div>
    );
  }
}

export default Dashboard;
