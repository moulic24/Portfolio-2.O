import React from 'react'
import './MobileNav.css';
import {Link} from 'react-router-dom'
import icon from '../../Images/bitmoji-icon.png';
const MobileNav = ({isOpen,toggleMenu}) => {
    return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
        <img  className="logo" src={icon} alt="nav-logo"/>
        <ul className='ul-items'>
                <li className='li-items'>
                <Link className='menu-item' to='/'>Home</Link>
                </li>
                <li className='li-items'>
                <Link className='menu-item' to='/skills'>Skills</Link>
                </li>
                <li className='li-items'>
                <Link className='menu-item' to='/experience'>Work Experience</Link>
                </li>
                <li className='li-items'>
                <Link className='menu-item' to='/projects'>Projects</Link>
                </li>
                <li className='li-items'>
                <Link className='menu-item' to='/certificates'>Certificates</Link>
                </li>
                <li className='li-items'>
                <Link className='menu-item' to='/contactme'>Contact Me</Link>
                </li>
                <a href="mailto:moulic523@gmail.com" className='contact-btn'>Hire Me</a>
            </ul>
        </div>
    
    </div>
    </>
  );
};

export default MobileNav
