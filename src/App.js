import React from 'react';
import './../src/assets/css/App.css';

import ComponenteTitulo from './components/Componente-titulo'
import ComponenteParrafo from './components/Componente-parrafo'
import ComponenteBoton from './components/Componente-boton'
// import ComponenteInput from './components/Componente-input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <ComponenteTitulo />
       <ComponenteParrafo />
       <ComponenteBoton />
       <input type="text" className="nombre"></input>
       <input type="text" className="apellido"></input>
       <input type="email" className="email"></input>
       <input type="password" className="password"></input>
       

      </header>
    </div>
  );
}

export default App;
