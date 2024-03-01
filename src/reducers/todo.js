import * as type from "../actions/ActionTypes";

let todoState = [];

const todo = (state = todoState, action = {}) => {
  switch (action.type) {
    case type.ADD_TODO: {
      const newTodo = {
        ...action.data,
      };
      return (todoState = [newTodo, ...state]);
    }
    case type.DELETE_TODO: {
      return (todoState = state.filter((item) => item.id !== action.id));
    }
    default:
      return todoState;
  }
};

export default todo;
