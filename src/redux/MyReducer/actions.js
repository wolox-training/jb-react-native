import axios from '../../config/api';

export const getBooks = (books) => ({
  type: 'GET_BOOKS',
  books
});

export const fetchBooks = () => async dispatch => {
  const response = await axios.get('/books');
  dispatch(getBooks(response.data));
}

export const submitFilters = (filter, value) => ({
  type: 'SUBMIT_FILTERS',
  filter,
  value
});

export const setFilters = (filter, value) => dispatch => {
   dispatch(submitFilters(filter, value));
}
