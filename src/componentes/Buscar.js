import React, { useState } from "react";


const style = {
    buscar: {
        background: " #F9FBFC",
        borderRadius: "2px",
        border: "2px solid #202329",
        margin: "0 24px",
        height: "64px",
        width: "calc(100% - 62px)",
        fontSize: "24px",
        textAlign: "center",
        fontFamily: 'Montserrat',
        fontWeight: 400,
        color: " #1E1E1F",
        boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)",
    }
}


const Buscar = () => {
    const [estado,setEstado]=useState('');

    const onSearch=(event)=>{
    console.log(event.target.value);
    setEstado(event.target.value);
    
    }
    


    return (
        <input onChange={onSearch} value={estado} style={style.buscar} placeholder="Buscar..."></input>
    );
}

export default Buscar;