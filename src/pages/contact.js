import React from 'react'
import Form from '../components/Form'
import github from '../styles/pages/contact/github-2.svg'
import twitter from '../styles/pages/contact/twitter-2.svg'
import linkedin from '../styles/pages/contact/linkedin-2.svg'
import { StyledContact, StyledForm } from '../styles/pages/contact'
import SEO from '../components/seo'

const Contact = () => {
    return(
        <>
        <SEO title="contacto"/>
        <StyledContact>
            <div className="title">
                <h3>¿Creamos algo juntos?</h3>
            </div>

            <article>
                <div className="text">
                    <p> 
                    Siempre estoy buscando conocer gente dentro de la comunidad Tech, asistir a eventos, conferencias, meetups y emprender nuevos retos.      
                    En este momento estoy abierto a oportunidades profesionales en una start-up con una misión poderosa y/o en una agencia de desarrollo con personas talentosas y apasionadas.  
                    Si tienes algún proyecto en mente, propuesta, invitación o colaboración envíame un mensaje para iniciar una conversación. Me encantará saber de ti.</p>
                    <div className="icons">
                        <a href="https://github.com/CarlosFabianG">
                        <img src={github} alt="github-icon"/>
                        </a>
                        <a href="https://twitter/Cfabian_blog">
                        <img src={twitter} alt="twitter-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/carlosfabian/">
                        <img src={linkedin} alt="linkedin-icon"/>
                        </a>
                    </div>
                </div>
            </article>
        </StyledContact>
        <StyledForm>
            <div className="title">
                <h3>Iniciemos una conversación</h3>
            </div>

            <div className="form">
                <Form />
            </div>
        </StyledForm>
        </>
    )
}

export default Contact