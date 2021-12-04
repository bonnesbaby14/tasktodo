import React from "react";


const style = {

    item: {
        backgroundColor: "#FAFAFA",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "24px",
        boxShadow: "0px 5px 50px rgba(32,35,41,0.15)",

    },
    itemP: {
        margin: "24px 0 24px 24px",
        width:"calc(100% - 120px)",
        fontSize:"18px",
        lineHeight:"24px",
        fontWeight:400,

    },
    itemPComplete:
    {
        textDecoration:"line-through",

    },
    icon:{
        cursor:"pointer",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"48px",
        width:"48px",
        fontSize:"24px",
        fontWeigth:"bold"

    },
    iconCheck:{
        position:"absolute",
        left:"12px",

    },
    iconCheckActive:{
        color:"#4caf50",

    },
    iconDelete:{
        fontSize:"20px",
        position:"absolute",
        top:"-15px",
        right:"0",
        ":hover": {
            background: "red"
          },
    }


}




const Item = () => {


    return (

        <li style={style.item}>
            <span style={{...style.icon,...style.iconCheck}}> √ </span>
            <p style={style.itemP}>Tarea uno</p>
            <span style={style.iconDelete}>X</span>
        </li>
    )
        ;
}


export default Item;