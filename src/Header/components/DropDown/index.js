import React,{ Component } from 'react';
import './style.css';

class DropDown extends Component {
  
  handleClick = (event) => {
    this.props.onClick(this.props.name);
  }

  checkVisibility() {
    return this.props.visibleDropDown === this.props.name;
  }

  render () {
    return (
      <div className="drop-down-position">
        <button onClick={this.handleClick} className="no-perfil-button" >
          <img className="navbar-img" alt="notifications" src={this.props.img} />
        </button>
        {
          this.checkVisibility() && (
            <div className={"menu " + this.props.row}>
              {this.props.children}
            </div>
          )
        }
      </div>
    );   
  }
}             

export default DropDown;
