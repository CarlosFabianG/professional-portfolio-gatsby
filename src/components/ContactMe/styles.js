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
        font-family: 'Ibarra Real Nova sans-serif';
    }
    .button {
        border: solid #33323D 1px;
        color: #33323D;
        padding: 1rem 2rem;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 12px;
        &:hover {
            background: #33323D;
            color: #FAFAFA;
        }
    }
`