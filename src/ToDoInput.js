//ToDoS input component
import React from 'react';

const ToDoInput = ({ task, handleTaskChange, handleUpdate, handleSave, isEditMode }) => {
  return (
    <div>
      <input value={task} onChange={(event) => handleTaskChange(event)} />
      <button
        disabled={task.length < 3}
        className="create-button"
        onClick={isEditMode ? handleUpdate : handleSave}
      >
        {isEditMode ? 'UPDATE' : 'CREATE'}
      </button>
    </div>
  );
};

export default ToDoInput;