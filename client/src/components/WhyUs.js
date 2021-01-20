import React from 'react'
import './WhyUs.css'

export default function WhyUs(props) {
    return (
        <div>
            <div className="whyusElement">
                <div className="whyus_left">
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                </div>
                <div className="whyus_right">
                    <div className="iconContainer"><img src={props.image}></img></div>
                </div>
            </div>
        </div>
    )
}
