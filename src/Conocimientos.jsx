import React from 'react';
import TarjetasConocimientos from './TarjetasConocimientos';
import {faHtml5, faCss3Alt, faJsSquare, faSass, faGitSquare, faReact,faPython} from '@fortawesome/free-brands-svg-icons'
const Conocimientos = ()=>(
    <div className="conocimientos d-flex justify-content-around flex-wrap">
        <TarjetasConocimientos title='HTML5' color='#F16529' icono= {faHtml5} description='Conocimientos de HTML5'/>
        <TarjetasConocimientos title='CCS3' color= '#264de4' icono= {faCss3Alt} description = 'Modelo de cajas, Positions, Flexbox, CSS Grid' />
        <TarjetasConocimientos title='Javascript' color='#F0DB4F' icono={faJsSquare}description='Variables, Arrays, Objetos, Funciones. Estructuras de control. Consumo de APIS externas'/>
        <TarjetasConocimientos title='Sass' color='#CD6799' icono={faSass} description='Variables, Mixins, Extends, Anidamiento'/>
        <TarjetasConocimientos title='Git' color='#f1502f' icono={faGitSquare} description='Git clone, git add, git commit, git add, git push, git pull' enlace='https://github.com/gustavo-se'/>
        <TarjetasConocimientos title='React' color='#61DBFB' icono={faReact} description='Sintaxis JSX, componentes y eventos'/>
        <TarjetasConocimientos title='Python' color='#4B8BBE' icono={faPython} description='Variables, Arrays, Objetos, Funciones. Estructuras de control'/>
        <TarjetasConocimientos title='Django' color='#092E20' icono={faPython} description='Uso del framework de python para la creacion de paginas web'/>
    </div>
)
export default Conocimientos;