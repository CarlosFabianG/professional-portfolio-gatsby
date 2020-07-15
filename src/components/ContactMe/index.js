import React from 'react'
import { Link } from 'gatsby'
import { StyledContactMe } from './styles'

const ContactMe = () => {
    return(
        <StyledContactMe>
            <div className="title-container">
                <h3>¿Tienes un proyecto en mente?</h3>
            </div>
            <div></div>
            <div className="button-container">
                <Link to={'/contact'} className="button">Contáctame</Link>
            </div>
        </StyledContactMe>
    )
}

export default ContactMe