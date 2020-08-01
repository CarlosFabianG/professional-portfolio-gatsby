import React from 'react'
import { Link } from 'gatsby'
import { StyledPreviousNext } from './styles'
import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow-right.svg'

const PreviousNext = (props) => {
    return(
        <StyledPreviousNext>
        <div className="left-button">
            <Link to={props.prev}><img src={arrowLeft} alt="left-arrow"/></Link>
                <div>
                    <p>{props.prevTitle}</p>
                    <span>Previous Project</span>
                </div>
            </div>

            <div className="right-button">
                <div>
                    <p>{props.nextTitle}</p>
                    <span>Next Project</span>
                </div>
            <Link to={props.next}><img src={arrowRight} alt="right-arrow"/></Link>
        </div>
        </StyledPreviousNext>
    )
}

export default PreviousNext