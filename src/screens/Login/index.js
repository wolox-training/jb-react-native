import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import wbooks from '../../assets/wbooks_logo.svg';

class Login extends Component {
  state = {
    user: '',
    pass: ''
  }  
  
  // handleSelectChange = (event) => {
  //   this.setState({ filter: event.target.value});
  // }

  // handleInputChange = (event) => {
  //   this.setState({ value: event.target.value});
  // }

  // handleClick = (event) => {
  //   if (event.key === 'Enter' | event.type === 'click') {
  //     this.setState({submittedValue: this.state.value, submittedFilter: this.state.filter });    
  //   }
  // }

  // filterList() {
  //   if (this.state.submittedFilter === '') {
  //     return books;
  //   }
    
  //   return books.filter (book => book[this.state.submittedFilter].toLowerCase().includes(this.state.submittedValue.toLowerCase()));
  // }

  render() {
    return (
      <div className="login">  
        <img alt="wbooks" src={wbooks}/> 
        <p className="help">Usuario</p>
        <input className="input" name="user" value={this.state.user}></input>
        <p className="help">Contrase&ntilde;a</p>
        <input className="input" name="pass" value={this.state.pass}></input>
        <button className="rent-button center">Ingresar</button>
      </div>
    );
  }
}

export default Login;
