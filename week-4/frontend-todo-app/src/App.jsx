/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);
  useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setTodos(data);
      });
    });
  }, []);

  return (
    <>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <span>{props.title} : </span>
      <span>{props.description} : </span>
      <button>Delete</button>
    </div>
  );
}

export default App;
