import React, { Component } from 'react';
//import books from '../../constants/books';
import './style.css';
import '../../style.css';
import BookImg from '../../components/BookImg';
import Comment from './components/Comment';
import FutureComment from './components/FutureComment';
import { Link } from 'react-router-dom'; 
import profile from '../../assets/search.svg';
import axios from '../../config/api';

class BookDetail extends Component {
  state = {
    bookSelected: []
  }

  componentDidMount() {
    axios.get(`/books/${this.props.match.params.id}`)
    .then((response)=>{
      this.setState( () => {
        return {
          bookSelected: response.data
        }
      })} 
    );
  }

  render() {
    if (!this.state.bookSelected) {
      return (
        <div>
          <Link className="return" to='/dashboard'>&lt; Volver</Link>
          <div className="no-book">
            <img className="profile-img" alt="img" src={profile}/> 
            <h2>Disculpe, el libro buscado no se ha podido encontrar</h2>
          </div>
        </div>
      ) 
    }

    return (
      <div>
        <Link className="no-decoration" to='/dashboard'><p className="return" >&lt; Volver</p></Link>
        <div className="detail">
          <div>
            <BookImg alt="img" src={this.state.bookSelected.image_url} classNameImg="book-img" classNameNoImg="book-no-img" />
          </div>
          <div className="max-width">
            <h2 className="title">{this.state.bookSelected.title}</h2>
            <h3 className="subtitle">{this.state.bookSelected.author}</h3>
            <h3 className="subtitle extra-padding">{this.state.bookSelected.year}</h3>
            <h3 className="subtitle">{this.state.bookSelected.genre}</h3>
            <p className="descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="rent-button">Alquilar</button>          
          </div>
        </div>
        <div className="sugestions">
          <div>
            <h2 className="title-color">Sugerencias</h2>
          </div>
          <div className="row">  
            <BookImg alt="img" src={null} classNameNoImg="book-sugestion" />
          </div>
        </div>
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
      </div>
    )
  };
}

export default BookDetail;
