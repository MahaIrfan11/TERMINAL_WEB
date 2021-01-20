import React from 'react'
import './myCsCard.css'

export default function myCsCard(props) {
    return (
        <div>
            <div className="contentHead">
                <div className="RightContainerContent">

                    <div className="csUniPic"><img src="/Images/des1.png"></img></div>
                    <div className="csUni_Wishlist">
                        <div className="icon"><i class="far fa-heart"></i></div>
                        <p><strong>10,000 Rupee/6 Months</strong></p>
                        <p>4 year</p>
                    </div>
                </div>
                <hr></hr>
            </div>

        </div>
    )
}
