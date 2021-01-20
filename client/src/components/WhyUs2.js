import React from 'react'
import './WhyUs2.css'

export default function WhyUs2(props) {
    return (
        <div>
            <div className="whyusElement2">
                <div className="whyus_right2">
                    <div className="iconContainer2"><img src={props.image}></img></div>
                </div>
                <div className="whyus_left2">
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                </div>

            </div>

        </div>
    )
}
