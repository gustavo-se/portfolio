import React from 'react';
import './Tarjetaconocimiento.css'
const TarjetasConocimientos = props =>(
    <div class="card text-center m-5 p-2 shadow" >
    <img src={props.img} class="card-img-top img-fluid" alt="imagen" />
    <div class="card-body ">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.description}</p>
      {/* <ul class="list-group list-group-flush">
        <li class="list-group-item">Sintaxis JSX</li>
        <li class="list-group-item">Componentes</li>
        <li class="list-group-item">Eventos</li>
     </ul> */}
      <a href={props.enlace} class="btn btn-outline-dark" target='_blank'>Go somewhere</a>
    </div>
  </div>
)
export default TarjetasConocimientos;