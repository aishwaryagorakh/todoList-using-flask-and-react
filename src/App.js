import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todos");

      setTodos(response.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      await axios.post("http://localhost:5000/todos", newTodo);
      fetchTodos();
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  const updateTodo = async (id, updatedTodos) => {
    try {
      await axios.put(`http://localhost:5000/todos/${id}`, updatedTodos);
      fetchTodos();
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
