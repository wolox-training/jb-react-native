import React, { Component } from 'react';
import books from '../../constants/books';
import './style.css';
import BookImg from '../../components/BookImg';
import Comment from './components/Comment';
import FutureComment from './components/FutureComment';
import { Link } from 'react-router-dom'; 

class BookDetail extends Component {
  bookInfo(book) {
    return (
      <div className="detail">
        <div>
          <BookImg alt="img" src={book.image_url} classNameImg="book-img" classNameNoImg="book-no-img" />
        </div>
        <div className="max-width">
          <h2 className="title">{book.title}</h2>
          <h3 className="subtitle">{book.author}</h3>
          <h3 className="subtitle extra-padding">{book.year}</h3>
          <h3 className="subtitle">{book.genre}</h3>
          <p className="descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button className="rent-button">Alquilar</button>          
        </div>
      </div>
    )
  }

  sugestions() {
    return (
      <div className="sugestions">
        <div>
          <h2 className="title-color">Sugerencias</h2>
        </div>
        <div className="row">  
          <BookImg alt="img" src={null} classNameNoImg="book-sugestion" />
        </div>
      </div>
    )
  }

  comments() {
    return (
      <div className="sugestions no-border">
        <div>
          <h2 className="title-color">Comentarios</h2>
        </div>
        <div className="row">  
          <FutureComment />
          <Comment />
          <Comment />
        </div>
      </div>
    )
  }
  
  render() {
    let bookSelected =  books.filter (book => book.id === parseInt(this.props.match.params.id, 10));
    
    if (bookSelected.length === 0) {
      return <div>Sorry, but the book was not found</div>
    }

    return (
      <div>
        <Link className="volver" to='/'>&lt; Volver</Link>
        {this.bookInfo(bookSelected[0])} 
        {this.sugestions()}
        {this.comments()}
      </div>
    )
  };
}

export default BookDetail;
