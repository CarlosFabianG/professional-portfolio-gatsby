import styled from 'styled-components'

export const StyledHeader = styled.header`

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
`