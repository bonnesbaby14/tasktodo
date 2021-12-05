import react, { useContext } from "react";
import { TaskContext } from "../context";



const style ={
 
        fontSize:"24px",
        textAlign:"center",
        margin:0,
        padding:"48px"
    
}

const Contador =()=>{
const {completeTask,
    totalTaskComplete,}=useContext(TaskContext);

    return (
        <h1 style={style}>{completeTask} tareas de completadas de {totalTaskComplete}</h1>
        
    );
}


export default Contador;