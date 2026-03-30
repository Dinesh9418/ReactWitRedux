// src/redux/reducer/todoReducer.js
const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; // add new todo

    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.Id == action.payload.Id ? action.payload : todo,
      );

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state; // return current state
  }
};

export default todoReducer;
