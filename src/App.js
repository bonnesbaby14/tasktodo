
import BotonNuevo from "./componentes/BotonNuevo";
import Buscar from "./componentes/Buscar";
import List from "./componentes/List";
import Item from "./componentes/Item";
import Contador from "./componentes/Contador"
import Modal from "./componentes/modal";
import { useContext } from "react";
import TaskForm from "./componentes/TaskForm";

import { TaskProvider, TaskContext } from "./context/index";



function App() {

  const {error,loading,deleteTask,completeTasks,taskSearched,modal}=useContext(TaskContext);


  return (
    <>

      <Buscar />
      <BotonNuevo />




      <List>
        {error && <h1>Ocurrio un error, intente mas tarde...</h1>}
        {loading && <h1>Cargando contenido...</h1>}
        {
          taskSearched.map(task => (<Item key={task.task} task={task.task} status={task.status} onComplete={() => completeTasks(task.task)} onDelete={() => {
            deleteTask(task.task)
          }} />))
        }
      </List>


      <Contador />

      {modal && <Modal> <TaskForm ></TaskForm></Modal>}

    </>
  );
}

export default App;
