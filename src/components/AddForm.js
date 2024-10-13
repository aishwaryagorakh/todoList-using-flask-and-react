import React, { useState } from "react";

function AddForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    addTodo({ title, body }); // Call the parent addTodo function with the form data
    setTitle(""); // Clear input fields after submission
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)} // Update body state
        placeholder="Body"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddForm;
