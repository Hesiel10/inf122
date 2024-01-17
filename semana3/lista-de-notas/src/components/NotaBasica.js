import React from "react";

function NotaBasica({nota, onDelete, onEdit}){
    return(
        <div>
            <p>Nota Basica</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>
            </div>
        </div>
    )
}

export default NotaBasica;