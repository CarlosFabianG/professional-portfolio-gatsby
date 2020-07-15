import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background: rgb(51, 50, 61);
    color: white;
    font-family: 'Public Sans', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        padding-top: 3.25rem;
    }
        .links {
            text-align: center;
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            a {
                text-decoration: none;
                color: white;
                margin-bottom: 15px;
            }
        }
        .sm-icons {
            a {
                margin-right: .7rem;
            }
        }
`