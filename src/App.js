import React,{useState} from 'react';
import './../src/assets/css/App.css';
import { useForm } from 'react-hook-form';


import ComponenteTitulo from './components/Componente-titulo'
import ComponenteParrafo from './components/Componente-parrafo'
import ComponenteBoton from './components/Componente-boton'
import ComponenteSubmit from './components/Componente-submit'
import ComponenteInput from './components/Componente-input'

function App() {
  const [form, setForm] = useState({name: "", lastName: "", email: "", password: ""})
  const {register, errors, handleSubmit} = useForm();

  const handleChange= (e) => {
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }

  const enviarDatos = (e) => {
    console.log("enviado")
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
              <form onSubmit={handleSubmit(enviarDatos)}>
              <ComponenteInput className="input" type="text" placeholder="Name" name="name" onChange={(e)=> handleChange(e)} control={register({
                required: {
                  value: true,
                  messaje: 'Name required'
                },
                maxLength: {
                  value: 6,
                  message: 'Not more than 6 characters'
                },
                minLength: {
                  value: 2,
                  message: 'At least 2 characters'
                }
              })}/>
              <span className="text-danger">
                {errors.name && errors.name.message}
              </span>

              <ComponenteInput className="input" type="text" placeholder="Last Name" name="lastName" onChange={(e)=> handleChange(e)} control={register({
                required: {
                  value: true,
                  messaje: 'Last Name required'
                },
                maxLength: {
                  value: 6,
                  message: 'Not more than 6 characters'
                },
                minLength: {
                  value: 2,
                  message: 'At least 2 characters'
                }
              })}/>
              <span className="text-danger">
                {errors.lastName && errors.lastName.message}
              </span>

              <ComponenteInput className="input" type="email" placeholder="Email" name="email" onChange={(e)=> handleChange(e)} control={register({
                required: {
                  value: true,
                  messaje: 'Email required'
                },
                maxLength: {
                  value: 30,
                  message: 'Not more than 30 characters'
                },
                minLength: {
                  value: 2,
                  message: 'At least 2 characters'
                }
              })}/>
              <span className="text-danger">
                {errors.email && errors.email.message}
              </span>

              <ComponenteInput className="input" type="password" placeholder="Password" name="password" onChange={(e)=> handleChange(e)} control={register({
                required: {
                  value: true,
                  messaje: 'Password required'
                },
                maxLength: {
                  value: 8,
                  message: 'Not more than 8 characters'
                },
                minLength: {
                  value: 2,
                  message: 'At least 2 characters'
                }
              })}/>
              <span className="text-danger">
                {errors.password && errors.password.message}
              </span>

              <ComponenteSubmit />
              </form>
            </div>
        </div>
             
               
    </div>
  );
}

export default App;
