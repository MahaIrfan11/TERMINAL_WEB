
import React from 'react'
import './Description.css'
export const Description = (props) => {
    return (
        <div>
            <section className="guidelines">
                <h2 className="contentHeading">{props.contentHeading}</h2>
                <div className="content">
                    <p>{props.content}</p>
                </div>
                <figure className='imagWrap'>
                    <div className="image">
                        <img src={props.imgDestination}></img>
                    </div>
                </figure>
            </section>

        </div>
    )
}


