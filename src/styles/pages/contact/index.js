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
            margin-bottom: 0;
        }
    }
    .text {
        p {
            margin-bottom: 2rem;
        }
        .icons {
            a {
                margin-right: 15px;
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
        }
    }
`