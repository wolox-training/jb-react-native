import React, { Component } from 'react';
import books from './books';
import './style.css';
import logo from '../assets/search.svg';

class BooksList extends Component {
  render() {
    const books = this.props.books;
    const listItems = books.map((books) =>
      <div key={books.id}>
        <img alt="" className="book-logo" src={books.image_url} />
        <h2 className="book-title">{books.title}</h2>
        <p className="book-author">{books.author}</p>
      </div>
    );

    return (
      <div className="grid">{listItems}</div>
    );
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filter: ''
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ filter: event.target.value});
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value});
  }

  handleClick(event) {
    if (event.key === 'Enter' | event.type === "click") {
      var updatedList = books;
      
      if (this.state.filter !== '') {
        updatedList = updatedList.filter (book => 
            book[this.state.filter].toLowerCase().search(this.state.value.toLowerCase()) !== -1);
      }

      this.setState({items: updatedList});
    }
  }

  componentWillMount() {
    this.setState({items: books});
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
        <BooksList books={this.state.items}/>
      </div>
    );
  }
}

export default Dashboard;
