import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import wbooks from '../../assets/wbooks_logo.svg';
import FormErrors from './components/FormErrors';
import axios from 'axios';
import { Redirect } from 'react-router-dom'; 

class Login extends Component {
  state = {
    email: '',
    pass: '',
    formErrors: {email: '', pass: ''},
    emailValid: false,
    passValid: false,
    formValid: false,
    login: false
  }  
  
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                   () => { this.validateField(name, value) 
                  });              
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'El email ingresado no tiene un formato correcto';
        break;
      case 'pass':
        passwordValid = (value.length >= 8) & (value.length <= 52);
        fieldValidationErrors.password = passwordValid ? '': 'La contraseña debe tener entre 8 y 54 caracteres';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  componentWillMount() {
    localStorage.setItem('isAuthenticated', this.state.formValid);
  }

  handleSubmit = (event) => {
      event.preventDefault();
      axios.post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', {
      email: this.state.email,
      password: this.state.pass
    })
    .then( (response) => {
      localStorage.setItem('isAuthenticated', 'true');
      this.setState({login: true});   
    })
    .catch( (error) => {
      let fieldValidationErrors = {user: 'Pass incorrect'}
      this.setState({formErrors: fieldValidationErrors}, this.validateForm);    
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
        <button type="submit" className="rent-button" disabled={!this.state.formValid}>Ingresar</button>
        <FormErrors formErrors={this.state.formErrors} />
      </form>
    );
  }
}

export default Login;
