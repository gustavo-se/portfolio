import React from 'react';
import './Tarjetaconocimiento.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TarjetasConocimientos = props =>(
    <div class="card text-center m-4 p-2 shadow">
      <div className="encabezado d-flex justify-content-center">
    <FontAwesomeIcon icon={props.icono} size="6x" color={props.color}/>
    </div>
    <div class="card-body ">
      <h5 class="card-title h2"><span>{props.title}</span></h5>
      <p class="card-text">{props.description}</p>
      <a href={props.enlace} class="btn btn-outline-dark" target='_blank'>Go somewhere</a>
    </div>
  </div>
)
export default TarjetasConocimientos;