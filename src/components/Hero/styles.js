import styled from 'styled-components'

export const StyledHero = styled.div`
margin-bottom: 4.75rem;

.img-container {
    margin-bottom: 1.5rem;
}
.text-container {
    background: white;
    h1 {
        font-size: 40px;
        font-family: Ibarra Real Nova;
    }
    .button {
        background: #203A4C;
        color: white;
        padding: .8rem 4.3rem;
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        text-decoration: none;
        font-family: 'Public Sans', sans-serif;
        cursor: pointer;
        &:hover {
            background: #5FB4A2;
        }
}
}

@media screen and (min-width: 1024px){
    .text-container {
        position: relative;
        bottom: 195px;
        z-index: 3;
    }
}
`
