import { combineReducers } from 'redux'; 

const initialState = {
  visibilityFilter: {
    submittedValue: '',
    submittedFilter: ''
  }
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_FILTERS':
      return {
        submittedValue: action.value,
        submittedFilter: action.filter
      };
    default:
      return state
  }
}

const books = (state = [], action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        books: action.books
      };
    default:
      return state
  }
}

const bookList = combineReducers({
  visibilityFilter,
  books
});

export default bookList;
