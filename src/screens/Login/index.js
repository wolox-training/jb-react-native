import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import wbooks from '../../assets/wbooks_logo.svg';
import FormErrors from './components/FormErrors';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    pass: '',
    formErrors: {email: '', pass: ''},
    emailValid: false,
    passValid: false,
    formValid: false
  }  
  
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                   () => { this.validateField(name, value) 
                  });              
  }

  submit = (event) => {
    axios.post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', {
      email: this.state.email,
      password: this.state.pass
    })
    .then(function (response) {
      localStorage.setItem('isAuthenticated', 'true');
    })
    .catch = (error) => {
      let fieldValidationErrors = {user: 'Pass incorrect'}
      this.setState({formErrors: fieldValidationErrors}, this.validateForm);    
    };
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

  render() {
    return (
      <div className="login">  
        <img alt="wbooks" src={wbooks}/> 
        <p className="help">Email</p>
        <input className="input" name="email" value={this.state.email} onChange={this.handleUserInput}></input>
        <p className="help">Contrase&ntilde;a</p>
        <input className="input" type="password" name="pass" value={this.state.pass} onChange={this.handleUserInput}></input>
        <Link to={'/dashboard'}> 
          <button className="rent-button" onClick={this.submit} disabled={!this.state.formValid}>Ingresar</button>
        </Link>
        <FormErrors formErrors={this.state.formErrors} />
      </div>
    );
  }
}

export default Login;
