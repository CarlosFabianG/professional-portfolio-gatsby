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
        cursor: pointer;
        &:hover {
            background: #5FB4A2;
        }
}
}
`
export const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    .img-container {
        margin-bottom: 30px;
    }

    .profile-text {
        border-top: solid rgb(234, 234, 235) 1px;
        border-bottom: solid rgb(234, 234, 235) 1px;
        h2 {
            font-family: Ibarra Real Nova sans-serif;
            font-size: 42px;
            margin-top: 1.45rem;
        }
        .copy {
            margin-bottom: 2rem;
            font-family: Public Sans sans-serif;
            line-height: 1.875;
        }
    }
    .button {
        padding: 1rem 4rem;
        border: solid #33323D 1px;
        color: #33323D;
        text-transform: uppercase;
        font-family: Public Sans sans-serif;
        text-decoration: none;
        cursor: pointer;
        font-size: 12px;
        letter-spacing: .5px;
        display: inline-block;
         margin-bottom: 3.25rem;
        &:hover {
            background: #33323D;
            color: #FAFAFA;
        }
    }
`