import React from 'react';
import Presentacion from './Presentacion'
import Main from './Main'
import Footer from './Footer'

const Portfolio =() => (
    <div className="portfolio">
        <header>
             <Presentacion/>
        </header>
        
        <section>
             <Main />
        </section>
        
        <footer>
            <Footer />
        </footer>
    </div>
)
export default Portfolio;