import React from 'react'
import { NewsContextProvider } from '../../NewsContext'
import News from '../News'
import Decide from './Decide'
import Footer from '../Footer';
import './Apply.css'
import Sidebar from '../Sidebar/Sidebar';
import Search from '../Search';
import { Description } from '../Description';
import Card2 from '../Card2';

export default function Apply() {
    return (
        <div>
            <div className="ApplyContainer">
                <div className="ContentContainer">
                    <img className="ImagePosition" src="/Images/apply.png" ></img>
                    <Description
                        contentHeading='Meeting the general entry requirements'
                        content='Before we begin though, let us make it clear why scoring high on your entry test is really important. You see nowadays securing good grades in college is essential but not sufficient. Every university has a selection criteria which includes tests and interviews. More weightage is given to your marks in your entry test than your grades in college when deciding your place in the merit list. Therefore, your marks in entry test, of the university that you want to pursue higher education in, will ultimately be the deciding factor of whether you will be able to secure admission in your dream university or not. Entry test is the biggest hurdle you need to cross to get admission in your dream university.'

                    />
                    <Description
                        contentHeading='Meeting the English requirement'
                        content='Before we begin though, let us make it clear why scoring high on your entry test is really important. You see nowadays securing good grades in college is essential but not sufficient. Every university has a selection criteria which includes tests and interviews. More weightage is given to your marks in your entry test than your grades in college when deciding your place in the merit list. Therefore, your marks in entry test, of the university that you want to pursue higher education in, will ultimately be the deciding factor of whether you will be able to secure admission in your dream university or not. Entry test is the biggest hurdle you need to cross to get admission in your dream university.'

                    />
                    <Description
                        contentHeading='General document requirements'
                        content='Before we begin though, let us make it clear why scoring high on your entry test is really important. You see nowadays securing good grades in college is essential but not sufficient. Every university has a selection criteria which includes tests and interviews. More weightage is given to your marks in your entry test than your grades in college when deciding your place in the merit list. Therefore, your marks in entry test, of the university that you want to pursue higher education in, will ultimately be the deciding factor of whether you will be able to secure admission in your dream university or not. Entry test is the biggest hurdle you need to cross to get admission in your dream university.'

                    />
                    <Description
                        contentHeading='Special document instructions'
                        content='Before we begin though, let us make it clear why scoring high on your entry test is really important. You see nowadays securing good grades in college is essential but not sufficient. Every university has a selection criteria which includes tests and interviews. More weightage is given to your marks in your entry test than your grades in college when deciding your place in the merit list. Therefore, your marks in entry test, of the university that you want to pursue higher education in, will ultimately be the deciding factor of whether you will be able to secure admission in your dream university or not. Entry test is the biggest hurdle you need to cross to get admission in your dream university.'

                    />
                    <Description
                        contentHeading='Incomplete documentation'
                        content='Before we begin though, let us make it clear why scoring high on your entry test is really important. You see nowadays securing good grades in college is essential but not sufficient. Every university has a selection criteria which includes tests and interviews. More weightage is given to your marks in your entry test than your grades in college when deciding your place in the merit list. Therefore, your marks in entry test, of the university that you want to pursue higher education in, will ultimately be the deciding factor of whether you will be able to secure admission in your dream university or not. Entry test is the biggest hurdle you need to cross to get admission in your dream university.'

                    />
                    <Description
                        contentHeading='Verification'
                        content='Before we begin though, let us make it clear why scoring high on your entry test is really important. You see nowadays securing good grades in college is essential but not sufficient. Every university has a selection criteria which includes tests and interviews. More weightage is given to your marks in your entry test than your grades in college when deciding your place in the merit list. Therefore, your marks in entry test, of the university that you want to pursue higher education in, will ultimately be the deciding factor of whether you will be able to secure admission in your dream university or not. Entry test is the biggest hurdle you need to cross to get admission in your dream university.'
                    />
                </div>

                <Search />
            </div>
            <Card2 />
            <Footer />


        </div>
    );

}