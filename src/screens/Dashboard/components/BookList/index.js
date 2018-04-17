import { connect } from 'react-redux';
import BookList from './layout';
import { getBooks } from '../../../../redux/MyReducer/actions';
import axios from '../../../../config/api';

const getVisibleBooks = (books, submittedFilter, submittedValue) => {
  if (submittedFilter === '') {
    return books;
  }
  
  return books.filter(book => book[submittedFilter].toLowerCase().includes(submittedValue.toLowerCase()));
}

const mapStateToProps = state => ({
  books: getVisibleBooks(state.bookList.books, state.bookList.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => {
    axios.get('/books')
    .then( (response) => {
      console.log(getBooks(response.data));
      dispatch(getBooks(response.data))
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
