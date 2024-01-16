import React from 'react';
import '../styles/Tablero.css';
import CuadroB from './CuadroB';
import { useState } from 'react';

function TableroB() {
    const[valor, setValor] = useState("X")
    const click = () =>{
        setValor(valor ==="X" ? "O" : "X");
    }
    return (
        <div className="tablero">
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
        </div>
    );
}

export default TableroB;