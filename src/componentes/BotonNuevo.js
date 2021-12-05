import React from "react";


const style = {
    boton: {
        backgroundColor: "#61DAFA",
        boxShadow: "0px 5px 25px rgba(97, 218, 250, 0.5)",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "50px",
        position: "fixed",
        bottom: "24px",
        right: "24px",
        fontWeight: "bold",
        color: "#FAFAFA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
        width: "64px",
        transform: "rotate(0)",
        zIndex:100,
        transition: ".3s ease",
        ":hover": {
            transform: "rotate(224deg)"
        }
    }
}



const BotonNuevo = ({setModal,modal}) => {
    const onClickButtom=()=>{
        setModal(!modal);
       }

    return (

        <button style={style.boton} onClick={onClickButtom}> +</button>
        

        
    

    );
}


export default BotonNuevo;