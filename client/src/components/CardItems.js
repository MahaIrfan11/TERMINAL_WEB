import React from 'react';
import { Link } from 'react-router-dom';
import "./CardItems.css"

function CardItems(props) {
    return (
        <div>
            <div className='cards__item'>

                <figure className='iconWrap' data-category={props.label}>
                    <div className="iconBorder">
                        <Link to={props.path} style={{ color: "black" }}><i className={props.iconName} /></Link>
                    </div>
                </figure>
                <div className='cards__item__info'>
                    <h3 className='cards__item__text'>{props.text}</h3>
                </div>
            </div>
        </div>
    );
}

export default CardItems;