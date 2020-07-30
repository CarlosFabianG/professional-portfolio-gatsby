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

@media screen and (min-width: 768px){
    height: 620px;
    .text-container {
        position: relative;
        bottom: 305px;
        z-index: 3;
        width: 514px;
        height: 278px;
    }
}

@media screen and (min-width: 1024px){
    height: 650px;
    .text-container {
        position: relative;
        bottom: 380px;
        z-index: 3;
        width: 40%;
        height: 357px;

        h1 {
            font-size: 50px;
        }

        .button {
            position: relative;
            top: 55px;
        }
    }
}
`
