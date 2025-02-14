// Task.js

import React from "react";

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete(); // Call the onDelete prop to remove the task
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
