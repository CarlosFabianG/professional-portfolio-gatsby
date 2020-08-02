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
        margin: 7px 0;
    }
    span {
        color: #33323D;
        opacity: 50%;
        font-size: 15px;
        font-family: 'Public Sans', sans-serif;
    }
    .left-button {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        border-right: solid rgb(234, 234, 235) 1.5px;
        img {
            margin-right: 25px;
        }
        a {
            display: flex;
            height: 25px;
        }
    }
    .right-button {
        width: 50%;
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: center;
       
        img {
            margin-left: 25px;
        }
        a {
            display: flex;
            height: 25px;
        }
        div {
            text-align: end;
        }
    }

    @media screen and (min-width: 768px){
        .left-button {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
        .right-button {
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }
    }
`