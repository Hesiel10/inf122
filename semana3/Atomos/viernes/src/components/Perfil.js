import React from "react";
import '../styles/Perfil.css'

function Perfil(){
    return(
        <div className="container2">
             <h1 className="title">Perfil</h1>
            <div className="form">
            <label>Nombre</label>
            <input type="text"/>
            <label>Apellido</label>
            <input type="text"/>
            <label>Contraseña</label>
            <input type="password"/>
            </div>
            <div>
                <button className="btn">Editar</button>
            </div>
        </div>
    )
}

export default Perfil;