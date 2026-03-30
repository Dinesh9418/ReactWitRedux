// src/redux/reducer/rootReducer.js
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  myReducer: todoReducer,  
});

export default rootReducer;