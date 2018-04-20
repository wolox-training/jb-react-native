import { ADD, REMOVE } from './actions';

const todos = (state = [], action) => {
  const { type, payload } = action;
  
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.payload,
          checked: false
        }
      ]
    case REMOVE:
      return state.filter(todo => todo.id === action.payload)
    default:
      return state;
  }
}

export default todos;
