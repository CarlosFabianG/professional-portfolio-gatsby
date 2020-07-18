import styled from 'styled-components'

export const StyledContact = styled.section`
    border-top: solid rgb(234, 234, 235) 1px;
    border-bottom: solid rgb(234, 234, 235) 1px;
    display: flex;
    flex-direction: column;
    .title {
        margin-top: 25px;
        margin-bottom: 24px;
        h3 {
            font-size: 40px;
            font-family: Ibarra Real Nova sans-serif;
            margin-bottom: 0;
        }
    }
    .text {
        margin-top: 25px;
        p {
            margin-bottom: 2rem;
            font-family: 'Public Sans', sans-serif;
            line-height: 2;
            opacity: 80%;
        }
        .icons {
            a {
                margin-right: 15px;
            }
        }
    }
    @media screen and (min-width: 1024px){
        flex-direction: row;
        .title {
            h3 {
                width: 350px;
            }
        }
    }
`

export const StyledForm = styled.section`
    display: flex;
    flex-direction: column;
    .title {
        margin-top: 2rem;
        h3 {
            font-size: 40px;
            font-family: Ibarra Real Nova sans-serif;
        }
    }
    @media screen and (min-width: 1024px){
        flex-direction: row;
        .title {
            h3 {
                width: 350px;
            }
        }
        .form {
            margin-top: 2rem;
            width: 65%;
        }
    }
`