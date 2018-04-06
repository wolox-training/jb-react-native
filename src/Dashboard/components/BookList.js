import React, { Component } from 'react';
import BookImg from './BookImg'

export default class BooksList extends Component {
  renderBook(book) {
    return (
      <div key={book.id}>
        <BookImg src={book.image_url} classNameImg={"book-logo"} classNameNoImg={"no-img"} />
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
      </div>
    )
  }
  
  render() {
    const books = this.props.books;
    return (
      <div className="grid">{books.map(this.renderBook)}</div>
    );
  }
}
