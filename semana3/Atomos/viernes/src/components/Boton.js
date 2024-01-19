import React from "react";
import '../styles/Boton.css'

function Boton({ texto, funClick }){
    const click=()=>{
    console.log("click")
    }
    return(
        <div className="container">
            <button className="btn" onClick={funClick}>Boton</button>
        </div>
    )
}

export default Boton;