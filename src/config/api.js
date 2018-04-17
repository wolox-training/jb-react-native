import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  timeout: 1000
});

axios.defaults.headers.common['Authorization'] = localStorage.getItem('isAuthenticated');

export default instance;
