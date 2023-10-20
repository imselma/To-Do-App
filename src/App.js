
import {useState} from 'react';
import './App.css';

const App = () => {
  
  const [task, setTask] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleTaskChange = (event) => {

    const{value} = event.target;  //Je li u viticaste stavljamo variable, koje smo definisali dole u return?
    console.log(value);
    setTask(value);

  }

  const handleSave = () =>{

    const newToDos = [...toDos, task]; //in that way you copied all itmes from toDos in newToDos and added the new task. No changes are made on the state variable.
    console.log(newToDos);
    setToDos(newToDos);
    setTask(""); //Kada se handleSave okine, neka mi input field ponovo bude prazan.

  }

  const handleDelete = (index) =>{ //prosl
    
    const toDosCopy = [...toDos];
    toDosCopy.splice(index,1);
    console.log(toDosCopy);
    setToDos(toDosCopy);

  }
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <input value={task} onChange={(event) => handleTaskChange(event)} />
      <button disabled={!task.length} className="create-button" onClick={() => handleSave()}>CREATE</button>
      </div>
      <div>
        {toDos.map((toDo, index)=> (
          //Zasto smo na proslom casu ovdje pisali key={index} u divu ispod. To stavljamo jer svaki element u listi mora imati svoj unique key property
          <div key = {index} className = "todo_wrapper">   
            <p>{toDo}</p>
            <button className="delete-button" onClick = {() => handleDelete()}>DELETE</button>
            </div>))}
      </div>
      </header>
    </div>
  );
}

export default App;
