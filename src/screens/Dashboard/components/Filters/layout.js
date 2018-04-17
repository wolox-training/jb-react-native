import React, { Component } from 'react';
import './style.css';
import logo from '../../../../assets/search.svg';

class Filters extends Component {
  state = {
    value: '',
    filter: ''
  }  

  handleSelectChange = (event) => {
    this.setState({ filter: event.target.value});
  }
  
  handleInputChange = (event) => {
    this.setState({ value: event.target.value});
  }  

  handleClick = (event) => {
    if (event.key === 'Enter' | event.type === 'click') {
      this.props.onSubmitFilters(this.state.value, this.state.filter);   
    }
  }
  
  render() {
    return (
      <div className="display-wrap">
        <select className="filter filter-margin" name="filter" value={this.state.filter} onChange={this.handleSelectChange}>
          <option value="" selected>Seleccionar filtro</option>
          <option value="title">Nombre</option>
          <option value="author">Autor</option>
        </select>
        <div>
          <input className="filter" name="value" value={this.state.value} onChange={this.handleInputChange} onKeyPress={this.handleClick} placeholder="Buscar..."></input>
          <button className="search" onClick={this.handleClick}><img src={logo} alt="logo"/></button>
        </div>
      </div>
    );
  }
}

export default Filters;
