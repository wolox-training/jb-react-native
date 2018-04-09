import React, { Component } from 'react';
import './style.css';
import profile from '../../../../assets/search.svg';
import '../../../../style.css';

export default class Comment extends Component {
  render() {
    return (
      <div className="comments">
        <div>
          <img className="profile-img" alt="img" src={profile}/> 
        </div>
        <div>
          <h2 className="book-title">Agregar comentario</h2>
          <textarea className="comment-text"></textarea>
          <button className="send-button">Enviar</button>          
        </div>  
      </div>
    );
  }
}
