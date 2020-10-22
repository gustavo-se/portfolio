import React from 'react'
import './sobremi.css'
import image01 from './image01.svg'
const Sobremi =() =>(
    <div className="sobremi d-flex w-100">
        <div className="info p-4 text-center">
            <h3>Aqui va informacion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem, vitae dolor obcaecati veritatis doloribus error provident, maiores molestiae aliquid quasi cumque pariatur quidem fugit illum, quos enim fugiat aspernatur sit illo vel impedit? Magni quisquam debitis consequuntur ratione impedit unde. Repudiandae blanditiis eos consectetur praesentium amet consequuntur fugiat quis?</p>
            <button className="btn btn-outline-dark">LinkedIn</button>
        </div>
        <div className="picture">
            <img src={image01}  alt="mifoto"/>
        </div>

    </div>
)




export default Sobremi