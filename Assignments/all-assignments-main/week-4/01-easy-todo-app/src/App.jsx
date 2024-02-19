/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/todos");
        // console.log(response.data);
        setTodos(response.data);
      } catch (error) {
        console.error("Failed to fetch todos: ", error);
      }
    };
    fetchTodos();
    setInterval(fetchTodos, 1000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/todos", newTodo);
      console.log(response.data);
      setNewTodo({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            id="title"
            name="title"
            value={newTodo.title}
            onChange={handleInputChange}
          ></input>
          <input
            type="text"
            placeholder="Description"
            id="description"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Add todo</button>
        </form>
      </div>

      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            id={todo.id} // Pass the id as prop
          />
        ))}
      </div>
    </>
  );
}

function Todo(props) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/todos/${props.id}`
      );
      if (response.status === 200) {
        console.log("Todo deleted successfully");
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  };

  return (
    <div>
      <span>{props.title} : </span>
      <span>{props.description} : </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default App;
