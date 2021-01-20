import React from 'react'
import Footer from '../Footer';
import BlogCard from '../BlogCard/BlogCard';
import BlogPost from '../BlogPost/BlogPost';
import { Description } from '../Description';
import Sidebar from '../Sidebar/Sidebar';
import './Decide.css'
import Search from '../Search';
import News from '../News';
import { NewsContextProvider } from '../../NewsContext';
import Card2 from '../Card2';
import MySidebar from '../MySidebar';


export default function Decide() {
    return (
        <div>

            <div className="decideContainer">
                <div className="intro"> <img src="/Images/decide.png" alt="decide"></img>
                </div>
                <div className="decideContentContainer">
                    <div className="left">
                        <p className="introPara">There are over 70,000 Master’s programmes listed on Mastersportal. While having so many options to choose from is great, it can also be intimidating, especially when you’re already stressed about studying abroad.

                    Don’t worry! We’ve thought about this and to make things easier, we’ve created the BestFit tool. By answering a few simple questions, you can see how well you match (or not) the requirements of a certain study programme</p>
                        <Description
                            contentHeading='1. What is your budget for tuition fees?'
                            content='Tuition fees vary a lot based on different factors, such as:

                        The country where you want to study
                        The discipline you’ve chosen
                        The length of your Master’s programme (it’s usually 1-2 years, but some disciplines require 4 years or more)
                        Your nationality (in many countries, non-EU/EEA students pay higher degrees than EU/EEA citizens)
                        You can also check out the Studyportals Scholarship to get some help on financing your studies abroad.'
                            imgDestination="/Images/decide1.png"
                        />

                        <Description
                            contentHeading='2. What is your budget for monthly living costs?'
                            content='Same story here. Living costs are higher in some nations (e.g. the UK, the Scandinavian countries) and lower in others (e.g. Portugal, the Czech Republic, Poland). Capital cities are also more expensive.

                        Of course, your costs of living also depend on personal habits. If you go out a lot, travel around, and don’t enjoy cooking, expect to pay more. Keep that in mind when you estimate a budget for your living costs.'
                            imgDestination="/Images/decide1.png"
                        />

                        <Description
                            contentHeading='2. What is your budget for monthly living costs?'
                            content='Same story here. Living costs are higher in some nations (e.g. the UK, the Scandinavian countries) and lower in others (e.g. Portugal, the Czech Republic, Poland). Capital cities are also more expensive.

                        Of course, your costs of living also depend on personal habits. If you go out a lot, travel around, and don’t enjoy cooking, expect to pay more. Keep that in mind when you estimate a budget for your living costs.'
                            imgDestination="/Images/decide1.png"
                        />
                        <Description
                            contentHeading='2. What is your budget for monthly living costs?'
                            content='Same story here. Living costs are higher in some nations (e.g. the UK, the Scandinavian countries) and lower in others (e.g. Portugal, the Czech Republic, Poland). Capital cities are also more expensive.

                        Of course, your costs of living also depend on personal habits. If you go out a lot, travel around, and don’t enjoy cooking, expect to pay more. Keep that in mind when you estimate a budget for your living costs.'
                            imgDestination="/Images/decide1.png"
                        />
                        <Description
                            contentHeading='2. What is your budget for monthly living costs?'
                            content='Same story here. Living costs are higher in some nations (e.g. the UK, the Scandinavian countries) and lower in others (e.g. Portugal, the Czech Republic, Poland). Capital cities are also more expensive.

                        Of course, your costs of living also depend on personal habits. If you go out a lot, travel around, and don’t enjoy cooking, expect to pay more. Keep that in mind when you estimate a budget for your living costs.'
                            imgDestination="/Images/decide1.png"
                        />
                    </div>

                    <div className="right">
                        <Search />
                        <br></br>
                        <MySidebar />
                    </div>
                </div>
            </div>


            <NewsContextProvider>
                <News />

            </NewsContextProvider>
            <Footer />
        </div>
    );

}