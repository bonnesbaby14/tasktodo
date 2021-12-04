
// import './App.css';
import BotonNuevo from "./componentes/BotonNuevo";
import Buscar from "./componentes/Buscar";
import List from "./componentes/List";
import Item from "./componentes/Item";
import Contador from "./componentes/Contador"
import { useState } from "react";


function App() {
  const [searchValue, setSearchValue] = useState('');
  const [tasks, setTasks] = useState([{
    task: "esta es la tarea",
    status: true,
  }, {
    task: "esta es la tarea 2",
    status: false,
  }, {
    task: "esta es la tarea 3",
    status: true,
  }, {
    task: "esta es la tarea 4",
    status: false,
  }, {
    task: "esta es la tarea 5",
    status: true,
  }, {
    task: "cebolla",
    status: true,
  }]);

  const completeTask=tasks.filter(task=>task.status==true).length;
  const totalTaskComplete=tasks.length;

  var  taskSearched =[];

  if(searchValue.length < 0){
    taskSearched=tasks;
  }else{
    taskSearched=tasks.filter(task=>{
      const taskSearch =task.task.toLocaleLowerCase();
      const searchText=searchValue.toLocaleLowerCase();
      return taskSearch.includes(searchText);
    })
  }

  return (
    <>

      <Buscar searchValue={searchValue} setSearchValue={setSearchValue} />
      <BotonNuevo />
      <List>
      {
        taskSearched.map(task=>(<Item key={task.task} task={task.task} status={task.status} />))
      }
      </List>

      <Contador total={totalTaskComplete} complete={completeTask} />

    </>
  );
}

export default App;
