import React,{ Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/wbooks_logo.svg';
import notifications from '../assets/notifications.svg';
import books from '../assets/add_book.svg';
import user from '../assets/people.svg';
import './style.css';
import DropDown from './components/DropDown';
import BookImg from '../components/BookImg';

class Header extends Component {
  state = {
    visibleDropDown: null,
    prevState: null
  }   

  handleOpen = (name) => {
    this.setState((prevState) => ({
      visibleDropDown: prevState.visibleDropDown === name ? null : name 
    }));
  }

  logout = (event) => {
    localStorage.removeItem('isAuthenticated');
    this.props.history.push("/login");
  }

  render() {
    return (
      <header>
        <nav className="navbar">
          <Link to='/dashboard'><img className="logo" alt="logo" src={logo} /></Link>
          <div className="display">
            <DropDown name="notifications" onClick={this.handleOpen} visibleDropDown={this.state.visibleDropDown} row="notification-content" img={notifications}>
              <div>
                <BookImg alt="img" classNameNoImg="not-no-img" />
              </div>
              <div>
                <p className="notif-descrip">Se encuentra disponible el libro:</p>
                <h2 className="notif-title">Titulo</h2>
                <h3 className="notif-subtitle">Autor</h3>        
              </div> 
            </DropDown>
            <img className="navbar-img" alt="books" src={books} />
            <DropDown name="profile" onClick={this.handleOpen} visibleDropDown={this.state.visibleDropDown} row="" img={user}>
              <button className="no-button"> Perfil </button>
              <button className="no-button" onClick={this.logout}> Cerrar sesión </button>
            </DropDown>
          </div>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header);
