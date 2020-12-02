import React from 'react';
import {faHtml5, faCss3Alt, faJsSquare, faSass, faGitSquare, faReact,faPython} from '@fortawesome/free-brands-svg-icons'
import KnowledgeCard from '../Molecules/KnowledgeCard';

const knowledge = [
{'title':'HTML5',
 'color':'#F16529',
 'icon': faHtml5,
 'description':'Optimos conocimientos sobre el lenguaje de marcado de hipertexto'},
{'title':'CCS3',
 'color': '#264de4',
 'icon': faCss3Alt,
 'description' : 'Conocimientos en Flexbox y CSS Grid'},
{'title':'Javascript',
 'color':'#F0DB4F',
 'icon':faJsSquare,
 'description':'Variables, Arrays, Objetos, Funciones. Estructuras de control. Consumo de APIS externas'},
{'title':'Sass',
 'color':'#CD6799',
 'icon':faSass,
 'description':'Buenos conocimientos sobre uno de los preprocesadores de css más usados'},
{'title':'Git', 
 'color':'#f1502f', 
 'icon':faGitSquare,
 'description':'Conocimientos sobre el software de control de versiones'},
{'title':'React', 
'color':'#61DBFB', 
'icon':faReact,
'description':'Sintaxis JSX, componentes, ciclo de vida, HOC, HOOKS'},
{'title':'Python', 
 'color':'#4B8BBE',
 'icon':faPython,
 'description':'Variables, Arrays, Objetos, Funciones. Estructuras de control'}]

const Knowledge = ()=>(
    <div className="conocimientos d-flex justify-content-around flex-wrap" id='knowledge'> 
        {knowledge.map(c => <KnowledgeCard title={c.title} color={c.color} icon={c.icon} description={c.description} />)}
    </div>
)
export default Knowledge;