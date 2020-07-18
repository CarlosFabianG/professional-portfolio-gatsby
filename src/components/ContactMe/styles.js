import styled from 'styled-components'

export const StyledContactMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    height: 214px;
    margin-top: 115px;
    margin-bottom: 80px;
    h3 {
        font-size: 40px;
        text-align: center;
        font-family: Ibarra Real Nova sans-serif;
        margin-bottom: 3rem;
    }
    .button {
        border: solid #33323D 1px;
        color: #33323D;
        font-family: 'Public Sans', sans-serif;
        padding: .82rem 2.4rem;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 12px;
        &:hover {
            background: #33323D;
            color: #FAFAFA;
        }
    }
    @media screen and (min-width: 768px){
        flex-direction: row;
        margin-top: 8vh; 
        margin-bottom: 7vh;
        .title-container {
            width: 350px;
            h3 {
            margin: 0;
            text-align: start;
        }   
        }
        .border-container {
            width: 113px;
            height: 1px;
            background: #33323D;
            margin: 0 4vw;
            opacity: 15%;
        }
    }
    @media screen and (min-width: 1024px){

        .title-container {
            width: fit-content;
        }
        .border-container {
            width: 534px;
        }
    }
`