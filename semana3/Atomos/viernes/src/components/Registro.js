import React from "react";
import '../styles/Registro.css'

function Registro(){
    return(
        <div className="container">
             <h1 className="title">Registro</h1>
            <div className="form">
            <label>Nombre</label>
            <input type="text"/>
            <label>Apellido</label>
            <input type="text"/>
            <label>Contraseña</label>
            <input type="password"/>
            </div>
            <div>
                <button className="btn">Registrar</button>
            </div>
        </div>
            )
}

export default Registro;