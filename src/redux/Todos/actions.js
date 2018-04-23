export const ADD = 'TODOS@ADD';
export const REMOVE = 'TODOS@AREMOVE';

let nextTodoId = 0;

export const addTodo = (item) => ({
  type: ADD,
  id: nextTodoId++,
  payload: item
});

export const removeTodo = (id) => ({
  type: REMOVE,
  id:id,
  payload: ''
});
