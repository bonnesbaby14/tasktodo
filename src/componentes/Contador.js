import react from "react";



const style ={
 
        fontSize:"24px",
        textAlign:"center",
        margin:0,
        padding:"48px"
    
}

const Contador =(props)=>{


    return (
        <h1 style={style}>{props.complete} tareas de completadas de {props.total}</h1>
        
    );
}


export default Contador;