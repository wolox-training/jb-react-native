import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import wbooks from '../../assets/wbooks_logo.svg';
import FormErrors from './components/FormErrors';
import { Redirect } from 'react-router-dom'; 
import { login } from '../../services/AuthService';

class Login extends Component {
  state = {
    email: '',
    pass: '',
    submitError: '',
    emailValid: false,
    passValid: false,
    login: false
  }  
  
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value,
                    [`${name}Valid`]: this.isFieldValid(name, value)
                  });
  }

  isFieldValid(fieldName, value) {
    switch(fieldName) {
      case 'email':
        return !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      case 'pass':
        return (value.length >= 8) & (value.length <= 52);
      default:
        break;
    }
  }

  formErrors() {
    return {
      email: this.state.emailValid ? '' : 'El campo email no es correcto',
      pass: this.state.passValid ? '' : 'El campo contraseña no es correcto',      
    };
  }

  formValid() {
    return (this.state.emailValid && this.state.passValid);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    login(this.state.email, this.state.pass)
    .then(() => {
      this.setState({login: true});
    }).catch(() => {
      this.setState({submitError: 'Pass incorrect'});
    });
  }

  render() {
    if (this.state.login) {
      return <Redirect to="/dashboard"/>
    }

    return (
      <form className="login" onSubmit={this.handleSubmit}>  
        <img alt="wbooks" src={wbooks}/> 
        <p className="help">Email</p>
        <input className="input" name="email" value={this.state.email} onChange={this.handleUserInput}></input>
        <p className="help">Contrase&ntilde;a</p>
        <input className="input" type="password" name="pass" value={this.state.pass} onChange={this.handleUserInput}></input>
        <button type="submit" className="rent-button" disabled={!this.formValid()}>Ingresar</button>
        <FormErrors formErrors={{
          ...this.formErrors(),
          submitError: this.state.submitError
        }} />
      </form>
    );
  }
}

export default Login;
