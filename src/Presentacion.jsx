import React from 'react'
import Navegador from './Navegador'
import './main-header.css'
const Presentacion = () => (
    <header className='mainH' >
        <Navegador />
    <div className='pt-5'>
    <div className="box lead d-flex align-items-center justify-content-center mx-auto p-3">
        <h3>Desarrollo web</h3>
        <p>Realiza tus proyectos con un profesional</p>
        <a href="link" className='btn btn-outline-dark'>Contacto</a>
    </div>
    </div>
    </header>
)



export default Presentacion