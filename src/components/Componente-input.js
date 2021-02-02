import React from 'react';


const ComponenteInput = (props) => {
    const {type, placeholder} = props    
        
    return(
        <div>
            <input type={type} className="input" placeholder={placeholder}></input>
            {/* <input type="text" className="input" placeholder="Last Name"></input>
            <input type="email" className="input" placeholder="Email"></input>
            <input type="password" className="input" placeholder="Password"></input> */}
        </div>
    );
}




export default ComponenteInput;