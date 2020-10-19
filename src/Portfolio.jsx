import React from 'react';
import Navegador from './Navegador'
import Presentacion from './Presentacion'
import Main from './Main'

const Portfolio =() => (
    <div className="portfolio">
        {/* head */}
        <Presentacion/>
        {/* main */}
        <Main />
        {/* footer */}
    </div>
)
export default Portfolio;