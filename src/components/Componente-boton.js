import React from 'react';


const ComponenteBoton = () => {
    let negrilla = "Try it free 7 days";
    let boton = " then $20/mo. thereafter";
    
    return(
        <div>
        <p className="negrilla">{negrilla}
        <span className="boton-try">{boton}</span>
        </p>
        </div>
    );
}




export default ComponenteBoton;