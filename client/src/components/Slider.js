import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from '../App';

const ImageSlider = (props) => {
    let settings = {
        adaptiveheight: true,

        dots: false,
        autoplay: true,
        draggable: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>


            <div className="card-wrapperS"><div className="cardS"><div className="card-imageS">
                <img src={"/Images/1.png"} /></div><div className="details"></div></div></div>
            <div className="card-wrapperS"><div className="cardS"><div className="card-imageS">
                <img src={"/Images/2.png"} /></div><div className="details">

                </div></div></div>
            <div className="card-wrapperS"><div className="cardS"><div className="card-imageS">
                <img src={"/Images/3.png"} /></div><div className="details">

                </div></div></div>
            <div className="card-wrapperS"><div className="cardS"><div className="card-imageS">
                <img src={"/Images/2.png"} /></div><div className="details">

                </div></div></div>
            <div className="card-wrapperS"><div className="cardS"><div className="card-imageS">
                <img src={"/Images/3.png"} /></div><div className="details">

                </div></div></div>
            <div className="card-wrapperS"><div className="cardS"><div className="card-imageS">
                <img src={"/Images/1.png"} /></div><div className="details">

                </div></div></div>


        </Slider>
    )
}

export default ImageSlider