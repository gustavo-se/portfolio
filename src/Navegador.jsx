import React from 'react'

const Navegador = () => (

    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a class="navbar-brand " href="...">Gustavo Segovia</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul className='navbar-nav ml-auto'>
        <li className='nav-item '><a href='...' className='nav-link'>Sobre Mi</a></li>
        <li className='nav-item '><a href='...' className='nav-link'>Conocimientos</a></li>
        <li className='nav-item '><a href='...' className='nav-link'>Contacto</a></li>
        <li className='nav-item '><a href='...' className='nav-link'>Experiencia</a></li>
    </ul>
    </div>
</nav>
)




export default Navegador;