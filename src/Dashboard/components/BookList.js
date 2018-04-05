import React, { Component } from 'react';

export default class BooksList extends Component {
  renderBook(book) {
    return (
      <div key={book.id}>
        <img alt="" className="book-logo" src={book.image_url} />
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
