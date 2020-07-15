import React from 'react'

const Form = () => {
    return(
        <>
          <label>Nombre</label>
          <input className="input-medium" placeholder="Elon Musk" />
  
          <label>Email</label>
          <input className="input-medium" placeholder="email@example.com" type="email" name="email" />
  
          <label>Mensaje</label>
          <input className="input-large" placeholder="¿Cómo te puedo ayudar?" type="text" name="message"/>
        </>
    )
}

export default Form