import React from "react";
import '../styles/Galeria.css'

function Galeria(){
    return(
        <div className="principal">
            <h1 className="title">Nombre: Pepito</h1>
            <div className="galeria-img">
            <img className="card-image"
            src={require('../components/images/flork1.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork2.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork3.jpg')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork4.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork1.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork2.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork3.jpg')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork4.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork1.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork2.png')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork3.jpg')}
            alt="Flork" />
            <img className="card-image"
            src={require('../components/images/flork4.png')}
            alt="Flork" />
            </div>
        </div>
    )
}

export default Galeria;