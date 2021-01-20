import React, { useState } from 'react'
import { Button } from './Button'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import './Navbar.css'

//Steps to create navbar
/**
 * 1-create a Navbar Name and assign logo.
 * 2-Add logo changing functionality
 * 3- Add ul tag 
 * 4-create li 
 * 5- handle dropdown functionality
 * 
 */

function Navbar() {
    //we are adding this functionality for mobile menu
    const [click, setClick] = useState(false); //without click pe bar show ho
    const handleClick = () => setClick(!click); //jab click ho tw x show ho.


    //dropdown functionality
    const [dropdown, setDropdown] = useState(false);

    //this method will close the menu and take you to the respective page

    const closeMobileMenu = () => setClick(false);


    //dropdown show handle
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };



    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    UniExplorer<i class="fas fa-user-graduate"></i></Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : "fas fa-bars"} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-items">
                        <Link to="/About" className="nav-links" onClick={closeMobileMenu}>About</Link>
                    </li>

                    <li className="nav-items" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/Explore" className="nav-links" onClick={closeMobileMenu} ><i class="fab fa-wpexplorer"></i>Explore <i class="fas fa-chevron-circle-down"></i></Link>
                        {dropdown && <Dropdown />}
                    </li>

                    <li className="nav-items">
                        <Link to="/Decide" className="nav-links" onClick={closeMobileMenu}><i class="fas fa-bullseye"></i>Decide</Link>
                    </li>

                    <li className="nav-items">
                        <Link to="/Apply" className="nav-links" onClick={closeMobileMenu}><i class="fas fa-paper-plane"></i>Apply</Link>
                    </li>

                    <li className="nav-items">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>SignUp</Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    )
}
export default Navbar
