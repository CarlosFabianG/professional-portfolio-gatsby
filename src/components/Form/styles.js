import styled from 'styled-components'

export const StyledForm = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin-bottom: 80px;
    font-family: 'Public Sans', sans-serif;
    label {
        color: #33323D;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .input-medium {
        height: 48px;
        background: rgb(234, 234, 235);
        border: 0;
        margin-bottom: 25px;
    }
    .input-large {
        height: 96px;
        background: rgb(234, 234, 235);
        border: 0;
        margin-bottom: 20px;
    }
    button {
        width: 64%;
        padding: .8rem 1rem;
        color: white;
        background: rgb(32, 58, 76);
        border: 0;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: pointer;
    }
    @media screen and (min-width: 768px){
        button {
            width: 200px;
            &:hover {
                background: #5FB4A2;
            }
        }
    }
    @media screen and (min-width: 1024px){
        width: 100%;
    }
`