import React from 'react';
import './Card2.css';
import CardItem2 from './CardItem2';

const Card2 = () => {
    return (
        <div className='card2'>
            <h1>Related Articles</h1>
            <div className='cards__container2'>
                <div className='cards__wrapper2'>

                    <ul className='cards__items2'>
                        <CardItem2 className='aa'
                            src='/Images/img3.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem2 className='aa'
                            src='/Images/img4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem2 className='aa'
                            src='/Images/img5.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Card2;



