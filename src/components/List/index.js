//@flow

import { connect } from 'react-redux';
import List from './layout';
import { removeTodo } from '../../redux/Todos/actions'

const mapStateToProps = state => {
  return {
    data: state.todos
  };
}

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (index) => {
    dispatch(removeTodo(index))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
