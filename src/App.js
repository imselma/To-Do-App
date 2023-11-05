
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'; //here we import all other components
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

const App = () => {
  const [task, setTask] = useState('');
  const [toDos, setToDos] = useState([]);
  const [indexToEditItem, setIndexToEditItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const TODO_KEY = 'toDos';

  const handleTaskChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setTask(value);
  };

  const handleSave = () => {
    const newToDos = [...toDos, { name: task, isCompleted: false }];
    console.log(newToDos);
    setToDos(newToDos);
    setTask('');
    localStorage.setItem(TODO_KEY, JSON.stringify(newToDos));
  };

  const handleDelete = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy.splice(index, 1);
    console.log(toDosCopy);
    setToDos(toDosCopy);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };

  const handleEdit = (taskToEdit, index) => {
    setTask(taskToEdit.name);
    setIsEditMode(true);
    setIndexToEditItem(index);
  };

  const handleUpdate = () => {
    const toDosCopy = [...toDos];
    toDosCopy[indexToEditItem].name = task;
    console.log(toDosCopy);
    setToDos(toDosCopy);
    setTask(" ");
    setIsEditMode(false);

    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  }

  const handleComplete = (index) => {
    const toDosCopy = [...toDos];
    toDosCopy[index].isCompleted = true;
    setToDos(toDosCopy);
    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  };

  useEffect(() => {
    const items = localStorage.getItem(TODO_KEY);

    if (items) {
      const parsedItems = JSON.parse(items);
      if (parsedItems?.length) {
        setToDos(parsedItems);
      }
    }
  }, []);

  //In the return statement, I didn't displayed the ToDoTasks component because, all individual tasks, are conatined in the ToDoList
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <ToDoInput task={task} handleTaskChange={handleTaskChange} handleUpdate={handleUpdate} handleSave={handleSave} isEditMode={isEditMode} />
        <ToDoList toDos={toDos} handleComplete={handleComplete} handleEdit={handleEdit} handleDelete={handleDelete} />
      </header>
    </div>
  );
};

export default App;

/*import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [task, setTask] = useState("");
  const [toDos, setToDos] = useState([]);
  const [indexToEditItme, setIndexToEditItme] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const TODO_KEY = "toDos";

  const handleTaskChange = (event) => {

    const { value } = event.target;
    console.log(value);
    setTask(value);

  }

  const handleSave = () => {

    const newToDos = [...toDos, {name: task, isCompleted: false}]; //in that way you copied all itmes from toDos in newToDos and added the new task. No changes are made on the state variable.
    console.log(newToDos);
    setToDos(newToDos);
    setTask(""); //Kada se handleSave okine, neka mi input field ponovo bude prazan.
    localStorage.setItem(TODO_KEY, JSON.stringify(newToDos));

  }

  const handleDelete = (index) => { //prosl

    const toDosCopy = [...toDos];
    toDosCopy.splice(index, 1);
    console.log(toDosCopy);
    setToDos(toDosCopy);

    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));

  }

  const handleEdit = (taskToEdit, index) => {

    setTask(taskToEdit.name);
    setIsEditMode(true);
    setIndexToEditItme(index);
  }

  const handleUpdate = () => {
    const toDosCopy = [...toDos];
    toDosCopy[indexToEditItme].name = task;
    console.log(toDosCopy);
    setToDos(toDosCopy);
    setTask(" ");
    setIsEditMode(false);

    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));


  }

  const handleComplete = (index) =>{
    const toDosCopy = [...toDos];
    toDosCopy[index].isCompleted = true;
    setToDos(toDosCopy);

    localStorage.setItem(TODO_KEY, JSON.stringify(toDosCopy));
  }

  useEffect(() => {
    const items = localStorage.getItem(TODO_KEY);
    console.log(typeof items);

    if(items){
      const parsedItems = JSON.parse(items);
      if (parsedItems?.length){
        setToDos(parsedItems);
      }
    }
  }, []) //prazan array, okida se na prvo ucitavanje.


  return (
    <div className="App">
      <h1>TODO APP</h1>
      <header className="App-header">
        <div>
          <input value={task} onChange={(event) => handleTaskChange(event)} />
          <button disabled={task.length < 3} className="create-button" onClick={isEditMode ? handleUpdate : handleSave}> {isEditMode? 'UPDATE' : 'CREATE'}</button>
         </div> 
        <div>
          {toDos.map((toDo, index) => (
            //Zasto smo na proslom casu ovdje pisali key={index} u divu ispod. To stavljamo jer svaki element u listi mora imati svoj unique key property
            <div key={index} className="todo_wrapper">
              <p className={`${toDo.isCompleted ? 'completed' : ''}`}>{toDo.name}</p>
              <div className="action-wrapper">
                <button className='complete-button' onClick={() => handleComplete(index)} disabled={toDo.isCompleted}>COMPLETE</button>
                <button className="edit-button" onClick={() => handleEdit(toDo, index)} disabled={toDo.isCompleted}>EDIT</button>
                <button className="delete-button" onClick={() => handleDelete(index)}>DELETE</button>
              </div>
            </div>))}
        </div>
      </header>
    </div>
  );
}

export default App;*/
