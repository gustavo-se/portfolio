import React from 'react'
import Conocimientos from './Conocimientos'
import './main.css'
import Sobremi from './Sobremi'
const Main = () => (
    <div className="main">
        <h3 className="text-center py-3">Conocimientos</h3>
        <Conocimientos />
        <h3 className='text-center py-3'> Sobre mi</h3>
        <Sobremi />
    </div>
)
export default Main;