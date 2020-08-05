import React from 'react'
import { StyledForm } from './styles'

const Form = () => {
    return(
        <StyledForm>
          <label for="name">Nombre</label>
          <input className="input-medium" placeholder="Elon Musk" name="name"/>
  
          <label for="email">Email</label>
          <input className="input-medium" placeholder="email@example.com" type="email" name="email" />
  
          <label for="message">Mensaje</label>
          <input className="input-large" placeholder="¿Cómo te puedo ayudar?" type="text" name="message"/>

          <button>Envíar mensaje</button>
        </StyledForm>
    )
}

export default Form