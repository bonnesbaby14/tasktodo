
// import './App.css';
import BotonNuevo from "./componentes/BotonNuevo";
import Buscar from "./componentes/Buscar";
import List from "./componentes/List";
import Item from "./componentes/Item";
import Contador from "./componentes/Contador"
import { useState } from "react";




const useLocalStorage = (itemName, initialValue) => {

  const localstorageItem = localStorage.getItem(itemName);
  let parseItems;

  if (!localstorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItems = [];


  } else {
    parseItems = JSON.parse(localstorageItem);
  }

  const [items, setItems] = useState(parseItems);

  const saveItem = (newItem) => {

    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem)

  }

  return [
    items, saveItem
  ]
}





function App() {

  const [tasks, setTasks] = useLocalStorage("TASK_V1", []);



  const [searchValue, setSearchValue] = useState('');



  const completeTask = tasks.filter(task => task.status == true).length;
  const totalTaskComplete = tasks.length;

  var taskSearched = [];


  const completeTasks = (text) => {
    const taskIndex = tasks.findIndex(task => task.task == text);
    const newTasks = [...tasks];
    newTasks[taskIndex].status = true;

    setTasks(newTasks);

  }
  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.task == text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);

    setTasks(newTasks);

  }

  if (searchValue.length < 0) {
    taskSearched = tasks;
  } else {
    taskSearched = tasks.filter(task => {
      const taskSearch = task.task.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return taskSearch.includes(searchText);
    })
  }

  return (
    <>

      <Buscar searchValue={searchValue} setSearchValue={setSearchValue} />
      <BotonNuevo />
      <List>
        {
          taskSearched.map(task => (<Item key={task.task} task={task.task} status={task.status} onComplete={() => completeTasks(task.task)} onDelete={() => {
            deleteTask(task.task)
          }} />))
        }
      </List>

      <Contador total={totalTaskComplete} complete={completeTask} />

    </>
  );
}

export default App;
