import styled from 'styled-components'

export const StyledDetail = styled.aside`
    display: flex;
    flex-direction: column;
    font-family: 'Public Sans', sans-serif;
    margin-top: 40px;
    h2,h3 {
        font-family: Ibarra Real Nova;
    }
    .aside-description {
        border-top: solid rgb(234, 234, 235) 1px;
        border-bottom: solid rgb(234, 234, 235) 1px;
        padding: 20px 0;
        line-height: 2;

        .copy {
            margin-bottom: 25px;
        }

        .copy-stack {
            text-transform: uppercase;
        }

        p {
            margin: 0;
            span {
            color: #5FB4A2;
            font-size: 13px;
        }
        }
        .button {
            margin-top: 23px;
            margin-bottom: 15px;
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
    .project-background {
        margin-top: 48px;
        line-height: 2;
    }
`