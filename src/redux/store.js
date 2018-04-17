import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookList from './MyReducer/reducer'

const rootReducer = combineReducers({
  bookList
})

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export default store;
