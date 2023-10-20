# Getting Started with Create React App

cdm Commands:

- npx create-react-app name_of_app

1. App.js

In <input> you have to enter something. Since we are creating a "TO DO" app, whe have to enter in the input task. The tasks have some value, and that value has to be stored when an event is triggered, That event is called onChange(). But firstly you need to make a state variable that will store the current value -> const [task, setTask] = useState("");
const{value} = event.target; -> Gets the target from the event that happened and stores it in the value.

Now we need to store somehow the tasks taht we entered in the input field. We need to handle the save. When we click on the CREATE button, we are triggering another event. So we use the onClick() function that calls a method handleSave(). In the handleSave() method we will put the tasks that we entered in an array. The array is defined as a state variable. In handleSave method, you used this way of adding items to the code: " const{newToDos} = [... toDos, task]; " This is beacuse if we went like " const{newToDos} = toDos.push(task) ", despite newToDos we would also make changes on the original state variable toDos. But this is not a good approach. That's why we are using the first way. We copy all the items from toDos into newTODos and than add the new added task. In that way changes are only done at the newToDos list, and not on the original state variable toDos.

- Always when defining a component, use className=" ".
- In curly brackets in methods we put the variables which we previously defined in the return statement. 
  value = {task} -> const{value} = event.target. If we have not defined the variable in return statement as a part of sonstant, we write it like that const newValue = [..array,newItem].
- disabled = {!task.length} -> disable the button if there is no task.
- setTask (" ") -> after clicking the CREATE button, to make the input field empty again

Next we need to make the inputed tasks to display on the screen and to kave a delete button next to them. I order to do that, whe have to take every element from the array and display it, basically loop through the arrayc(for loop), but in js we use the .map method. From toDos.map(toDos, index) -> we take from the array the forst element and the index, and than in a paragraf we display it <p>{toDo}</p>.  Now we have to setup the handleDelete button. in this method we make a copy of the toDos list, and than do the splice method that takes the index which needs to be deleted, and the number of deletions.

- disable = {} -> we use it when we want to disable a button.

2. App.css
  
  .className:hover -> if we want to change te style when hovered.
  - backgroundColor -> setting the color of the backgroun of component.
  - color -> setting the text color.
  - margin-left -> it makes space to the left side between elements.
  - display: flex -> to set all components on the same level.
  - justify-conetnt -> where to place the content regarding the space and axis.


