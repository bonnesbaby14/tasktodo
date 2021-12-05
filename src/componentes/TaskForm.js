import React from "react";




const style={
    form: {
        width: "90%",
        maxWidth: "300px",
        backgroundColor:" #fff",
        padding: "33px 40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
      
      label :{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#1E1E1F",
        marginBottom:" 26px",
      }
      ,
      textarea: {
        backgroundColor:"#F9FBFC",
        border: "2px solid #202329",
        borderRadius: "2px",
        boxShadow: "0px 5px 50px rgba(32, 35, 41, 0.25)",
        color: "#1E1E1F",
        fontSize: "20px",
        textAlign: "center",
        padding: "12px",
        height: "96px",
        width: "calc(100% - 25px)"
      },
      
    //   textarea::placeholder {
    //     color: #A5A5A5;
    //     font-family: 'Montserrat';
    //     font-weight: 400;
    //   }
      
    //   textarea:focus {
    //     outline-color: #61DAFA;
    //   }
      
      buttons: {
        marginTop: "14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },
      
      button: {
        cursor: "pointer",
        display: "inline-block",
        fontSize: "20px",
        color: "#202329",
        fontWeight: 400,
        width: "120px",
        height: "48px",
        borderRadius:" 2px",
        border: "none",
        fontFamily: 'Montserrat',
      },
      
      buttonAdd:{
        background: "#61DAFA",
        boxShadow:"0px 5px 25px rgba(97, 218, 250, 0.5)",
      },
      
      buttonCancel:{
        background: "transparent",
      }
}


const TaskForm = ({setModal,modal}) => {
    const onCancel=()=>{

        setModal(!modal);
    }
    const onAccept=()=>{

    }
    const onSubmit=(event)=>{
event.preventDefault();

    }

    return <form style={style.form} onSubmit={onSubmit} >
        <label style={style.label} >Ingresa una nueva tarea</label>
        <textarea style={style.textarea} name="tarea" id="tarea" placeholder="Tarea..."></textarea>
        <div style={style.buttons}>
            <button style={{...style.button,...style.buttonCancel}} type="button" onClick={onCancel}>Cancelar</button>
            <button style={{...style.button,...style.buttonAdd}}  type="submit" onClick={onAccept} >Aceptar</button>
        </div>

    </form>
}
export default TaskForm;