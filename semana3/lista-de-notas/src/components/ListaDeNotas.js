import React, { useState } from "react";
import NotaBasica from "./NotaBasica";
import '../style/ListaDeNotas';

function ListaDeNotas(){
    const[notas, setNotas]=useState([])
    const addNota = () => {
        console.log("agregar nota");
    };

    const onDelete = () => {
        console.log("Eliminar")
    };

    const onEdtit = () =>{
        console.log("Editar")
    };

    return(
        <div className="contenedor-principal">
            <input
            className="input"
                type="text"
                value = {texto}
                onChange={(e) = () => }
            />
        </div>
    );
}

export default ListaDeNotas;
