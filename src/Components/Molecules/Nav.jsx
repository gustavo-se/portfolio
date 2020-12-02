import React from 'react'
import 'bootstrap/dist/js/bootstrap.js';
const Nav = () => (

    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className='navbar-nav m-auto'>
        <li className='nav-item '><a href='#aboutme' className='nav-link'>Sobre Mi</a></li>
        <li className='nav-item '><a href='#knowledge' className='nav-link'>Conocimientos</a></li>
        <li className='nav-item '><a href='#contact' className='nav-link'>Contacto</a></li>
    </ul>
    </div>
</nav>
)




export default Nav;