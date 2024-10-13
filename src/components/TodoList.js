import React from "react";

function TodoList({ todos, updateTodo, deleteTodo }) {
  const handleUpdate = (id) => {
    const updatedTitle = prompt("Enter new title:");
    const updatedBody = prompt("Enter new body:");
    if (updatedTitle && updatedBody) {
      updateTodo(id, { title: updatedTitle, body: updatedBody });
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.body}</p>
          <button onClick={() => handleUpdate(todo.id)}>Update</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
