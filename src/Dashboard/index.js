import React, { Component } from 'react';
import books from './books';
import './style.css';

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
      value: ''
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ filter: event.target.value});
  }

  handleInputChange(event) {
    
    this.setState({ value: event.target.value});
    var updatedList = books;

    if (this.state.filter === 'title') {
      updatedList = updatedList.filter (book => 
        book.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
    } else if (this.state.filter === 'author') {
      updatedList = updatedList.filter (book => 
        book.author.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
    } 
   
    this.setState({items: updatedList});
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
          <div className="search">
            <input className="filter" name="value" value={this.state.value} onChange={this.handleInputChange} placeholder="Buscar..."></input>
          </div>
        </div>
        <BooksList books={this.state.items}/>
      </div>
    );
  }
}

export default Dashboard;
