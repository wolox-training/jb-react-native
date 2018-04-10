import React, { Component } from 'react';
import profile from '../../../../assets/search.svg';
import './style.css';
import '../../../../style.css';

class Comment extends Component {
  render() {
    return (
      <div className="comments">
        <div>
          <img className="profile-img" alt="img" src={profile}/> 
        </div>
        <div>
          <h2 className="book-title">Kimberly Carter</h2>
          <p className="book-author">xx/xx/xx</p>
          <p className="comment-descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>  
      </div>
    );
  }
}

export default Comment;
