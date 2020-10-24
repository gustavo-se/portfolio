import React from 'react';
import TarjetasConocimientos from './TarjetasConocimientos';
import {faHtml5, faCss3Alt, faJsSquare, faSass, faGitSquare, faReact,faPython} from '@fortawesome/free-brands-svg-icons'

const conocimientos = [
{'title':'HTML5',
 'color':'#F16529',
 'icono': faHtml5,
 'description':'Conocimientos de HTML5'},
{'title':'CCS3',
 'color': '#264de4',
 'icono': faCss3Alt,
 'description' : 'Modelo de cajas, Positions, Flexbox, CSS Grid'},
{'title':'Javascript',
 'color':'#F0DB4F',
 'icono':faJsSquare,
 'description':'Variables, Arrays, Objetos, Funciones. Estructuras de control. Consumo de APIS externas'},
{'title':'Sass',
 'color':'#CD6799',
 'icono':faSass,
 'description':'Variables, Mixins, Extends, Anidamiento'},
{'title':'Git', 
 'color':'#f1502f', 
 'icono':faGitSquare,
 'description':'Git clone, git add, git commit, git add, git push, git pull'},
{'title':'React', 
'color':'#61DBFB', 
'icono':faReact,
'description':'Sintaxis JSX, componentes y eventos'},
{'title':'Python', 
 'color':'#4B8BBE',
 'icono':faPython,
 'description':'Variables, Arrays, Objetos, Funciones. Estructuras de control'},
{'title':'Django',
'color':'#092E20',
'icono':faPython,  
'description':'Uso del framework de python para la creacion de paginas web'}]

const Conocimientos = ()=>(
    <div className="conocimientos d-flex justify-content-around flex-wrap"> 
        {conocimientos.map(c => <TarjetasConocimientos title={c.title} color={c.color} icono={c.icono} description={c.description} />)}
    </div>
)
export default Conocimientos;