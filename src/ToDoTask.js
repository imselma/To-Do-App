//Component for handling individual items
import React from 'react';

const ToDoTask = ({ todo, index, handleComplete, handleEdit, handleDelete }) => {
  return (
    <div className="todo_wrapper">
      <p className={`${todo.isCompleted ? 'completed' : ''}`}>{todo.name}</p>
      <div className="action-wrapper">
        <button
          className="complete-button"
          onClick={() => handleComplete(index)}
          disabled={todo.isCompleted}
        >
          COMPLETE
        </button>
        <button className="edit-button" onClick={() => handleEdit(todo, index)} disabled={todo.isCompleted}>
          EDIT
        </button>
        <button className="delete-button" onClick={() => handleDelete(index)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ToDoTask;