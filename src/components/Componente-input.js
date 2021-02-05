import React from 'react';

const ComponenteInput = (props) => {
    const {type, placeholder, name, onChange, control} = props 
    
    
    
    return(
        <div>
            <input type={type} className="input" placeholder={placeholder} name={name} onChange={onChange} ref={control}></input>
        </div>
    );
}




export default ComponenteInput;