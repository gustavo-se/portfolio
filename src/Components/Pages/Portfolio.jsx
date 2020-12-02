import React from 'react';
import Presentation from '../Organism/Presentation'
import Main from './Main'
import Footer from '../Molecules/Footer'

const Portfolio =() => (
    <div className="portfolio">
        <header>
             <Presentation/>
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