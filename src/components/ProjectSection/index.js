import React from 'react'
import { Link } from 'gatsby'
import Image from '../image'
const ProjectSection = ({imageName, title, description}) => {
    return(
        <section className="section-odd">
            <Image name={imageName} />
            <article>
                <h3>{title}</h3>
                <div className="text">
                    {description}
                </div>
                <Link>Ver proyecto</Link>
            </article>
        </section>
    )
}

export default ProjectSection