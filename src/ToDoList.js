//Component for handling the list
import React from 'react';
import ToDoTask from './ToDoTask';


//In the code below, I iterated through the list of tasks, and created a ToDoTask compoennt for ach task in the list, and passed to the component necessery data and handlers.
const ToDoList = ({ toDos, handleComplete, handleEdit, handleDelete }) => {
  return (
    <div>
      {toDos.map((toDo, index) => (
        <ToDoTask
          key={index}
          todo={toDo}
          index={index}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ToDoList;