import React from 'react'
import Nav from '../Molecules/Nav'
import '../../Styles/main-header.css'
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const links = [
    {
        'href' : 'https://github.com/gustavo-se',
        'icon': faGithubSquare,
        'color': '#f1502f'
    },{
        'href' : 'https://www.linkedin.com/in/gustavo-segovia-a70820195/',
        'icon' : faLinkedin,
        'color' : '#0077b5'
    },{
        'href' : 'https://m.facebook.com/gustavo.segovia19',
        'icon' : faFacebookSquare,
        'color' : '#3b5998'
    }
]
const Presentation = () => (
    <div className='mainH' >
        <Nav />
        <div className='pt-5'>
            <div className="box lead d-flex align-items-center justify-content-center mx-auto p-3">
                <h3>Gustavo Segovia</h3>
                <p>Desarrollador web Frontend</p>
                <div className='d-flex justify-content-around w-50'>
                    { links.map(l => <a href={l.href} target="_blank" rel="noopener        noreferrer"><FontAwesomeIcon icon={l.icon} color={l.color} size='2x'/></a>)}
                </div>
            </div>  
        </div>
    </div>
)

export default Presentation