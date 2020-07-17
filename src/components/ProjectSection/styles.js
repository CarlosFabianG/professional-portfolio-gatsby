import styled from 'styled-components'

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 72px;
    img {
        margin-bottom: 2rem;
    }
    article {
        border-top: solid rgb(234, 234, 235) 1px;
        border-bottom: solid rgb(234, 234, 235) 1px;
        padding: 25px 0;
        margin-top: 2rem;
        h3 {
            font-family: Ibarra Real Nova sans-serif;
            font-size: 40px;
        }
        .text {
            font-family: 'Public Sans', sans-serif;
            font-size: 15px;
            line-height: 2;
            margin-bottom: 24px;
        }
        .button {
            font-family: 'Public Sans', sans-serif;
            font-size: 12px;
            display: inline-block;
            padding: .9rem 1.7rem;
            border: solid #33323D 1px;
            color: #33323D;
            text-transform: uppercase;
            text-decoration: none;
            &:hover {
                background: #33323D;
                color: white;
            }
        }
    }
`