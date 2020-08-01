import styled from 'styled-components'

export const StyledPreviousNext = styled.section`
    display: flex;
    border-top: solid rgb(234, 234, 235) 1px;
    border-bottom: solid rgb(234, 234, 235) 1px;
    height: 132px;
    margin-top: 5vh;
    color: #33323D;
    img {
        height: 16px;
    }
    p {
        font-family: 'Ibarra Real Nova', serif;
        font-size: 32px;
        margin: 0;
    }
    span {
        color: #33323D;
        opacity: 50%;
        font-size: 15px;
    }
    .left-button {
        display: flex;
        align-items: center;
        
        border-right: solid rgb(234, 234, 235) 1.5px;
        img {
            margin-right: 25px;
        }
    }
    .right-button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
       
        img {
            margin-left: 25px;
        }
        div {
            text-align: end;
        }
    }
`