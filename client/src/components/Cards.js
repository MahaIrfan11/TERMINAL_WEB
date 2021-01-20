import React from 'react';
import './Cards.css';
import CardItems from './CardItems';

function Cards() {
    return (
        <div className='browse'>
            <img className="guideImg" src="/Images/favt.png"></img>
            <h3 className="cardsHeading">Browse By Category</h3>
            <div className='browse__container'>
                <div className='row'>
                    <div className="column">
                        <CardItems
                            iconName='fas fa-laptop-code'
                            text='Computer Science'
                            para="Computer science is the study of algorithmic processes and computational machines."
                            label='Study'
                            path='/ComputerScienceIT'
                        />
                    </div>

                    <div className="column">
                        <CardItems
                            iconName='fas fa-hospital-alt'
                            text='Medical & Health'
                            para="Medical education is education related to the practice of being a medical practitioner."
                            label='Adventure'
                            path='/MedicineHealth'
                        />
                    </div>
                    <div className="column">
                        <CardItems
                            iconName='fas fa-cogs'
                            text='Engineering & Technology'
                            para="Engineering and technology is study of scientific principles to design and build machines."
                            label='Adventure'
                            path='/Engineering'
                        />
                    </div>


                </div>
                <div className='row'>
                    <div className="column">
                        <CardItems
                            iconName='fas fa-chart-line'
                            text='Businesss & Management'
                            para="A Business & Management is concerned with the way a  organisation operates and functions."
                            label='Adventure'
                            path='/BusinessManagement'
                        />
                    </div>
                    <div className="column">
                        <CardItems
                            iconName='fas fa-paint-brush'
                            text='Arts & Design'
                            para=" A study of sketch or painting done in preparation for a finished piece, or as visual notes."
                            label='Adventure'
                            path='/ArtsDesign'
                        />
                    </div>
                    <div className="column">
                        <CardItems
                            iconName='fas fa-pencil-ruler'
                            text='Humanities'
                            para="Humanities is the academic disciplines that deals in the aspects of human society and culture."
                            label='Adventure'
                            path='/Humanities'
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cards;