import React from "react";
import '../styles/Login.css';
import Boton from "./Boton";

function Login(){
    return(
        <div className="main">
            <h1 className="title">Login</h1>
            <div className="form">
                <label>Usuario</label>
                <input type="text"/>
                <label>Contraseña</label>
                <input type="password"/>
            </div>
            <div className="botones">
                <button onClick={Boton} className="btns">Registrar</button>
                <button className="btns">Ingresar</button>
            </div>
        </div>
    )
}

export default Login;