import React from 'react';
import Historial from './Historial';
import TableroE from './TableroE';
import { useState } from 'react';

function Juego() {
    const [historial, setHistorial] = useState([
        {
            cuadros: Array(9).fill(null)
        },
    ]);
    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);
    const calcularTurnoJugador = () => {
        return (nroMovimiento % 2 === 0) ? 'X' : 'O';
    }
    const [ reiniciar, setReiniciar] = useState(false);
    const click = (i) => {
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        console.log("nuevoMovimiento", nuevoMovimiento);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        console.log("movimientoActual", movimientoActual);
        const cuadros = movimientoActual.cuadros.slice();
        console.log("cuadrosTemp", cuadros);
        if (ganador || cuadros[i] !== null) {
            return; 
        }
        if (cuadros[i] === null) {
            cuadros[i] = calcularTurnoJugador();
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
        }
        const ganadorActual = calcularGanador(cuadros);
        if (ganadorActual !== null) {
            setGanador(ganadorActual);
        }
    }
    
    const saltarA = (movimiento) => {
        console.log("movimiento", movimiento);
        const nuevoHistorial = historial.slice(0, movimiento + 1);
        setHistorial(nuevoHistorial);
        setNroMovimiento(movimiento);
        setJugador(jugador === "X" ? "O" : "X");

    }

    const reiniciarPartida = () => {
        setHistorial([{ cuadros: Array(9).fill(null) }]);
        setNroMovimiento(0);
        setGanador(null);
        setReiniciar(!reiniciar);
    }

    const movimientoActual = historial[nroMovimiento];
    return (
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${calcularTurnoJugador()}`}</h2>
                <TableroE cuadros={movimientoActual.cuadros} onClick={(i) => click(i)} />
            </div>
            <button onClick={reiniciarPartida}>Reiniciar Partida</button>
            <Historial historial={historial} saltarA={saltarA} />
        </div>
    );
}
export default Juego;

function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2], // primera fila
        [3, 4, 5], // segunda fila
        [6, 7, 8], // tercera fila
        [0, 3, 6], // primera columna
        [1, 4, 7], // segunda columna
        [2, 5, 8], // tercera columna
        [0, 4, 8], // diagonal
        [2, 4, 6] // diagonal
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}