import React from 'react'
import { StyledForm } from './styles'

const Form = () => {
    return(
        <StyledForm>
          <label>Nombre</label>
          <input className="input-medium" placeholder="Elon Musk" />
  
          <label>Email</label>
          <input className="input-medium" placeholder="email@example.com" type="email" name="email" />
  
          <label>Mensaje</label>
          <input className="input-large" placeholder="¿Cómo te puedo ayudar?" type="text" name="message"/>

          <button>Envíar mensaje</button>
        </StyledForm>
    )
}

export default Form