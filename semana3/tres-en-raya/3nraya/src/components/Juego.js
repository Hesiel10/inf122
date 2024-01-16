import React from "react";
import TableroD from "./TableroD";
import { useState } from "react";

function Juego(){
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, stJugador] = useState("X")
    console.log("turno", jugador);
    const click = (i) => {
        console.log("pos:" +i);
        const cuadrosTemp = [...cuadros];
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        console.log("array", cuadrosTemp);
        setJugador(jugador === "X"? "O":"X");

    }
    return <TableroD cuadros={cuadros} onclick={clickl}/>
}
