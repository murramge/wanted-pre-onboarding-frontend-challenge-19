import { ADD_TODO } from "./ActionTypes";
import { DELETE_TODO } from "./ActionTypes";

export const addToDo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const deleteToDo = (selectTodo) => ({
  type: DELETE_TODO,
  payload: selectTodo,
});
