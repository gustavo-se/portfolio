import React from 'react';
import TarjetasConocimientos from './TarjetasConocimientos';

const Conocimientos = ()=>(
    <div className="conocimientos d-flex justify-content-around flex-wrap">
        <TarjetasConocimientos title='HTML5 y CSS3' description='Conocimientos de HTML5. CSS3: Modelo de cajas, Positions, Flexbox, CSS Grid' img='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'/>
        <TarjetasConocimientos title='Javascript' description='Variables, Arrays, Objetos, Funciones. Estructuras de control. Consumo de APIS externas'  img='https://www.sawabonacreative.com/wp-content/uploads/custom/tech/js.png'/>
        <TarjetasConocimientos title='Sass' description='Variables, Mixins, Extends, Anidamiento' img='https://cdn.worldvectorlogo.com/logos/sass-1.svg'/>
        <TarjetasConocimientos title='Git' description='Git clone, git add, git commit, git add, git push, git pull' enlace='https://github.com/gustavo-se'img='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png'/>
        <TarjetasConocimientos title='React' description='Sintaxis JSX, componentes y eventos'img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'/>
        <TarjetasConocimientos title='Python' description='Variables, Arrays, Objetos, Funciones. Estructuras de control' img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'/>
        <TarjetasConocimientos title='Django' description='Uso del framework de python para la creacion de paginas web' img='https://cdn.iconscout.com/icon/free/png-512/django-2-282855.png' />
    </div>
)
export default Conocimientos;