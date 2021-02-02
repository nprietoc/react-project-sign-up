import React from 'react';


const ComponenteSubmit = () => {
    let submit = "Claim your free trial";
    let footer = "By clicking the button, you are agreeing to our";
    let link = " Terms and Services";    
    
    return(
        <div>
        <button className="boton-claim">{submit}</button>
        <p className="footer">{footer}
        <span className="link">{link}</span> 
        </p>
        </div>
    );
}




export default ComponenteSubmit;