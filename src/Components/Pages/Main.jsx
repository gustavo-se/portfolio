import React from 'react'
import '../../Styles/main.css'
import AboutMe from '../Organism/AboutMe'
import Knowledge from '../Organism/Knowledge'

const Main = () => (
    <div className="main">
        <h3 className="text-center py-3 display-4 ">Conocimientos</h3>
        <Knowledge />
        <h3 className='text-center py-3 bg-light display-4'> Sobre mi</h3>
        <AboutMe />
    </div>
)
export default Main;