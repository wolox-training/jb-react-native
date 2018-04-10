import React, { Component } from 'react';
import BookImg from '../../../../components/BookImg';
import { Link } from 'react-router-dom'; 
import './style.css';

export default class BooksList extends Component {
  renderBook(book) {
    return (
      <Link className="book-link" to={`/books/${book.id}`} key={book.id}>
        <div>
          <BookImg src={book.image_url} classNameImg="book-logo" classNameNoImg="no-img" />
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>
        </div>
      </Link>
    )
  }
  
  render() {
    return (
      <div className="grid">{this.props.books.map(this.renderBook)}</div>
    );
  }
}
