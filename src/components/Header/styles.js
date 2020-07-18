import styled from 'styled-components'

export const StyledHeader = styled.header`
    font-family: 'Public Sans', sans-serif;
    .wrapper {
        padding: 2.1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            img {
                margin:0;
            }
        }
        .burger-icon {
            img {
                margin: 0;
            }
        }
        .navbar-menu {
            display: none;
        }
    }
    @media screen and (min-width: 768px) {
        .wrapper {
            padding: 2rem 2.4rem;
            .burger-icon {
                display: none;
            }
            .navbar-menu {
                display: flex;
                a {
                    text-decoration: none;
                    text-transform: uppercase;
                    margin-left: 40px;
                    font-size: 12px;
                    color: #33323D;
                    &:hover {
                        color: #5FB4A2;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px){
        .wrapper {
            padding: 2rem 12vw;
        }
    }
`