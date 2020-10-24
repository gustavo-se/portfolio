import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio'
import TarjetasConocimientos from './TarjetasConocimientos'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
function App() {
  return (
    <div className="App ">
      <Portfolio />
      <TarjetasConocimientos icono={faHtml5}/>
      {console.log(faHtml5)}
    </div>
  );
}

export default App;
