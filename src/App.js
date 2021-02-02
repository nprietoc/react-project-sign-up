import React from 'react';
import './../src/assets/css/App.css';

import ComponenteTitulo from './components/Componente-titulo'
import ComponenteParrafo from './components/Componente-parrafo'
import ComponenteBoton from './components/Componente-boton'
import ComponenteSubmit from './components/Componente-submit'
import ComponenteInput from './components/Componente-input'

function App() {
  return (
    <div className="flex">
    
      
      <div className="contenedor-1">
      <ComponenteTitulo />
      <ComponenteParrafo />
      </div>

      <div className="contenedor-2">       
        <ComponenteBoton />
          <div className="contenedor-input">
            <ComponenteInput type="text" placeholder="Name"/>
            <ComponenteInput type="text" placeholder="Last Name"/>
            <ComponenteInput type="email" placeholder="Email"/>
            <ComponenteInput type="password" placeholder="Password"/>
            <ComponenteSubmit />
          </div>
      </div>
             
          

     
    </div>
  );
}

export default App;
