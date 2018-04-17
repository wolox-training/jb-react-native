import { createStore, combineReducers } from 'redux';
import bookList from './MyReducer/reducer'

const rootReducer = combineReducers({
  bookList
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
