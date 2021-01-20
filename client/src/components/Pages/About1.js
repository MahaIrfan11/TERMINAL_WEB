import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './About1.css'
import Slider from 'react-slick'
import Cards from '../Cards';
import WhyUs from '../WhyUs';
import WhyUs2 from '../WhyUs2';
import Footer from '../Footer';
import ImageSlider from '../Slider'
const About1 = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }


    return (
        <div>
            <div className="containerA" style={{ backgroundImage: `url(/Images/graduation1.jpg)` }}>
                <div className="childContainerA">
                    <h4 className="TopLine">Consulting Agency</h4>
                    <h1 className="Headingh1">Welcome to UniExplorer</h1>
                    <h4 className="Subtitle">Planning for admission doesn't have to be stressful. We can help you in finding the right institute!</h4>
                    <Link to="./ComputerScienceIT"><button className="btn1A"> Let's Explore </button></Link>
                </div>
            </div>
            <section className="ReviewSlider">
                <div className="stdHeader">
                    <h1 className="haappyStd">Hundreds of Our Happy <span className="happySpan">Student</span></h1></div>
                <div className="ReviewContent">
                    <div className="Description">
                        <img src="/Images/me.png"></img>
                    </div>
                    <div className="Slider">
                        <ImageSlider />
                    </div>
                </div>
            </section>
            <Cards />
            <Footer />
        </div>
    )
};

About1.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps)(About1);
