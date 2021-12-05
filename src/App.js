
// import './App.css';
import BotonNuevo from "./componentes/BotonNuevo";
import Buscar from "./componentes/Buscar";
import List from "./componentes/List";
import Item from "./componentes/Item";
import Contador from "./componentes/Contador"
import Modal from "./componentes/modal";
import { useEffect, useState } from "react";
import TaskForm from "./componentes/TaskForm";
import useLocalStorage from "./hooks/useLocalStorage";








function App() {

  const { items: tasks, saveItem: setTasks, loading, error } = useLocalStorage("TASK_V1", []);



  const [searchValue, setSearchValue] = useState('');
  const [modal,setModal]=useState(false);



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
      <BotonNuevo setModal={setModal} modal={modal }/>
      <List>
        {error && <h1>Ocurrio un error, intente mas tarde...</h1>}
        {loading && <h1>Cargando contenido...</h1>}
        {
          taskSearched.map(task => (<Item key={task.task} task={task.task} status={task.status} onComplete={() => completeTasks(task.task)} onDelete={() => {
            deleteTask(task.task)
          }} />))
        }
      </List>

      <Contador total={totalTaskComplete} complete={completeTask} />
      
      {modal && <Modal> <TaskForm saveItem={setTasks} items={tasks} setModal={setModal} modal={modal} ></TaskForm></Modal>}

    </>
  );
}

export default App;
