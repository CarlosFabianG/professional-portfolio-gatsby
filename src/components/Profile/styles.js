import styled from 'styled-components'

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
            font-family: 'Public Sans', sans-serif;
            line-height: 1.875;
        }
    }
    .button {
        padding: 1rem 4rem;
        border: solid #33323D 1px;
        color: #33323D;
        text-transform: uppercase;
        font-family: 'Public Sans', sans-serif;
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

    @media screen and (min-width: 768px){
        flex-direction: row;
        .img-container {
            width: 250px;
            margin-right: 60px;
            .gatsby-image-wrapper {
                width: 250px;
            }
        }
    }
`