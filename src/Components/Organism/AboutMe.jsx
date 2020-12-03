import React from 'react'
import '../../Styles/sobremi.css'
import image02 from '../../Images/image02.jpg'
const AboutMe =() =>(
    <div className="sobremi d-flex flex-column align-items-center" id="aboutme">
        <div className="picture ">
            <img src={image02}  alt="mifoto"/>
        </div>
        <div className="info p-4 text-center ">
            <p>Soy estudiante de desarrollo web full stack y de psicología. Actualmente estoy por terminar la carrera de Lic. en Psicología en la Universidad de la UBA pero mi pasión siempre estuvo en la programación. Pretendo desarrollarme en esto último ya que es lo que siempre quise. Me encuentro realizando un curso que me brinda las herramientas necesarias para desarrollarme profesionalmente en esa área. Ya tengo conocimientos sólidos en HTML5, CSS, SASS, Git, Github y JavaScript. También poseo nociones básicas de ReactJs. Sigo aprendiendo y desarrollando habilidades. </p>
            <a className="btn btn-outline-dark" href='https://www.linkedin.com/in/gustavo-segovia-a70820195/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </div>
            
    </div>
)




export default AboutMe