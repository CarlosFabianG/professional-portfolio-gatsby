import React from 'react'
import { Link } from 'gatsby'
import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow-right.svg'

const PreviousNext = (props) => {
    return(
        <>
        <div className="left-button">
            <Link to={'/'}><img src={arrowLeft} alt="left-arrow"/></Link>
                <div>
                    <p>{props.previous}</p>
                    <span>Previous Project</span>
                </div>
            </div>

            <div className="right-button">
                <div>
                    <p>{props.next}</p>
                    <span>Next Project</span>
                </div>
            <Link to={'/'}><img src={arrowRight} alt="right-arrow"/></Link>
        </div>
        </>
    )
}

export default PreviousNext