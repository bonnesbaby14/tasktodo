
// import './App.css';
import BotonNuevo from "./componentes/BotonNuevo";
import Buscar from "./componentes/Buscar";
import List from "./componentes/List";
import Item from "./componentes/Item";
import Contador from "./componentes/Contador"
import { useState } from "react";


function App() {

  const localstorageTask=localStorage.getItem("TASK_V1");
  let parsedTask;

  const saveTask=(newTask)=>{

    localStorage.setItem("TASK_V1",JSON.stringify(newTask));
    setTasks(newTask)

  }

  if(!localstorageTask){
    localStorage.setItem("TASK_V1",JSON.stringify([]));
    parsedTask=[];


  }else{
    parsedTask=JSON.parse(localstorageTask);
  }


  const [searchValue, setSearchValue] = useState('');
  const [tasks, setTasks] = useState(parsedTask);


  const completeTask=tasks.filter(task=>task.status==true).length;
  const totalTaskComplete=tasks.length;

  var  taskSearched =[];


  const completeTasks=(text)=>{
    const taskIndex=tasks.findIndex(task=>task.task==text);
    const newTasks=[...tasks];
    newTasks[taskIndex].status=true;

    saveTask(newTasks);

  }
  const deleteTask=(text)=>{
    const taskIndex=tasks.findIndex(task=>task.task==text);
    const newTasks=[...tasks];
    newTasks.splice(taskIndex,1);

    saveTask(newTasks);

  }

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
        taskSearched.map(task=>(<Item key={task.task} task={task.task} status={task.status} onComplete={()=>completeTasks(task.task)} onDelete={()=>{
          deleteTask(task.task)
        }}/>))
      }
      </List>

      <Contador total={totalTaskComplete} complete={completeTask} />

    </>
  );
}

export default App;
