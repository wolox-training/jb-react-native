import { connect } from 'react-redux';
import BookList from './layout';
import { fetchBooks } from '../../../../redux/MyReducer/actions';

const getVisibleBooks = (books, submittedFilter, submittedValue) => {
  if (submittedFilter === '') {
    return books;
  }
   
  return books.filter(book => book[submittedFilter].toLowerCase().includes(submittedValue.toLowerCase()));
}

const mapStateToProps = state => ({
  books: getVisibleBooks(state.bookList.books.books, state.bookList.visibilityFilter.submittedFilter, state.bookList.visibilityFilter.submittedValue)
})

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => dispatch(fetchBooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
