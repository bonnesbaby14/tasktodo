import React from "react";


const style ={

    lista:{
        margin:0,
        padding:"0 0 56px 0",
        listStyle:"none"
    }

}


const List =(props)=>{


    return (
        <section>
            <ul style={style.lista}>
                {props.children}
            </ul>
        </section>
    );
}


export default List;