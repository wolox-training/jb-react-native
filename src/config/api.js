import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
