// @flow

import { connect } from 'react-redux';
import { addTodo } from '../../../../redux/Todos/actions';
import List from './layout'
import todos from '../../../../redux/Todos/reducer';

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (text) => {
    dispatch(addTodo(text))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(List);
