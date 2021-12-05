import React from "react";
import  ReactDOM  from "react-dom";
const style={
    modal:{
        background: "rgba(32,35,41,.8)",
        position: "fixed",
        top: "-10px",
        left: "-10px",
        right: "-10px",
        bottom: "-10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    

    }
}

const Modal = ({ children }) => {

    return ReactDOM.createPortal(
        <div style={style.modal}>
            {children}
        </div>, document.getElementById("modal")
    );
}


export default Modal;