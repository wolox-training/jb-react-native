import { createStore, applyMiddleware, combineReducers } from 'redux';

import todos from './Todos/reducer';
import Reactotron from 'reactotron-react-native';

const store = Reactotron.createStore(
  combineReducers({
    todos
  }),
  {},
  applyMiddleware()
);

export default store; 
