import React from 'react';
import './Tarjetaconocimiento.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TarjetasConocimientos = props=>(
    <div className="card text-center m-4 p-2 shadow">
      <div className="encabezado d-flex justify-content-center">
     <FontAwesomeIcon icon={props.icono} size="6x" color={props.color}/>
    </div>
    <div className="card-body ">
      <h5 className="card-title h2">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <a href='...' className="btn btn-outline-dark">Go somewhere</a>
    </div>
  </div>
)
export default TarjetasConocimientos;