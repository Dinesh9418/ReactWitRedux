import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "./redux/action/action";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [updateId, setUpdateId] = useState();

  const todoList = useSelector((state) => state.myReducer) || [];
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!updateId) {
      dispatch(addTodo({ id: todoList.length + 1, text: inputText }));
      setInputText("");
    } else {
      dispatch(updateTodo({ id: updateId, text: inputText }));
      setInputText("");
      setUpdateId("");
    }
  };

  const handleUpdate = (todo) => {
    setInputText(todo.text);
    setUpdateId(todo.id);
  };

  const handleDelete = (id) => {
    console.log("ID", id);
    dispatch(removeTodo(id));
  };

  return (
    <div className="container">
      <div className="box">
        <div className="input-area">
          <input
            type="text"
            className="input"
            placeholder="Write your own...."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button onClick={handleAdd}> {updateId ? "UPDATE" : "SAVE"}</button>
        </div>

        <div className="todo-list">
          {todoList.map((todo) => (
            <div className="list" key={todo.id}>
              <p>{todo.text}</p>
              <div className="icons">
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(todo)}
                  className="btn btn-outline-success"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
