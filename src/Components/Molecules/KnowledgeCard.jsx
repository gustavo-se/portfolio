import React from 'react';
import '../../Styles/Tarjetaconocimiento.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const KnowledgeCard = props =>(
    <div className="card text-center m-4 p-2 shadow">
      <div className="encabezado d-flex justify-content-center">
     <FontAwesomeIcon icon={props.icon} size="6x" color={props.color}/>
    </div>
    <div className="card-body ">
      <h5 className="card-title h2">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </div>
  </div>
)
export default KnowledgeCard;