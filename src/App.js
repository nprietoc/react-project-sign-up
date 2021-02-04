import React,{useState} from 'react';
import './../src/assets/css/App.css';

import ComponenteTitulo from './components/Componente-titulo'
import ComponenteParrafo from './components/Componente-parrafo'
import ComponenteBoton from './components/Componente-boton'
import ComponenteSubmit from './components/Componente-submit'
import ComponenteInput from './components/Componente-input'

function App() {
  const [form, setForm] = useState({name: "", lastName: "", email: "", password: ""})

  const handleChange= (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }
  return (
    <div className="flex">
          
      <div className="contenedor-1">
      <ComponenteTitulo />
      <ComponenteParrafo />
      </div>

      <div className="contenedor-2">       
        <ComponenteBoton />
          <div className="contenedor-input">
            <ComponenteInput className="input" type="text" placeholder="Name" name="name" onChange={(e)=> handleChange(e)}/>
            <ComponenteInput className="input" type="text" placeholder="Last Name" name="lastName" onChange={(e)=> handleChange(e)}/>
            <ComponenteInput className="input" type="email" placeholder="Email" name="email" onChange={(e)=> handleChange(e)}/>
            <ComponenteInput className="input" type="password" placeholder="Password" name="password" onChange={(e)=> handleChange(e)}/>
            <ComponenteSubmit />
          </div>
      </div>
             
          

     
    </div>
  );
}

export default App;
