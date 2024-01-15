import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1)
  }
  const reiniciar = () => {
   setNumClicks(0)
  }
  const restar3 = () => {
    setNumClicks(nroClicks - 3)
  }
  const sumar3 = () => {
    setNumClicks(nroClicks + 3)
  }
  const restar1 = () => {
    setNumClicks(nroClicks - 1)
  }
  const sumar1 = () => {
    setNumClicks(nroClicks + 1)
  }
  const[show, setShow]useState(true);
  const mostrar = () => ¡setShow

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
            <Boton texto="-3" esBotonClick={true}
            funcionClick={restar3} />
          <Boton texto="+3" esBotonClick={false}
            funcionClick={sumar3} />
            <Boton texto="-1" esBotonClick={true}
            funcionClick={restar1} />
          <Boton texto="+1" esBotonClick={false}
            funcionClick={sumar1} />
          <div className='contendedor-botones-reiniciar'>
          <Boton className='reiniciar' texto="Reiniciar" esBotonClick={false}
          funcionClick={reiniciar} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;