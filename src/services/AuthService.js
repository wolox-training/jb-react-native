import axios from '../config/api';

export function checkAuth() {
  return !!localStorage.getItem('isAuthenticated');
}

export function logout() {
  localStorage.removeItem('isAuthenticated');
}

export function login (email, pass) {
  return(  
    axios.post('/users/sessions', {
    email: email,
    password: pass
  })
  .then( (response) => {
    localStorage.setItem('isAuthenticated', response.data.access_token);
    axios.defaults.headers.common['Authorization'] = response.data.access_token;   
  }))
}
