import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento.js';
import EventoB from './components/EventoB.js';
import EventoC from './components/EventoC.js';

function App() {
  return (
    <div className="App">
      <Evento />
      <EventoB title="Py Pizza 03 - PyPuzzle"
      image="evento2"
      dateLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
      placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
      description="¡Hola Pythonista!
      Participa en este Evento Presencial de la comunidad Python La Paz
      ¿Cuánto conoces de Python?
      Aprende a trabajar en equipo resolviendo increíbles acertijo
      ¡Anímate a ser parte de esta actividad!"
      />
      <EventoC/>
    </div>
  );
}

export default App;
