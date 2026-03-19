import React from 'react'
import './MobileNav.css';
import { Link, useNavigate } from 'react-router-dom'
import icon from '../../Images/bitmoji-icon.png';
import { EXTERNAL_LINKS, NAV_ITEMS } from '../../utils/constants';
const MobileNav = ({isOpen,toggleMenu}) => {
    const navigate = useNavigate();

    const handleNavClick = (sectionId) => {
      const hash = sectionId === 'home' ? '' : `#${sectionId}`;
      navigate(`/${hash}`);
      toggleMenu();
    };

    return (
    <>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}
    >
        <div className="mobile-menu-container">
        <img  className="logo" src={icon} alt="nav-logo"/>
        <ul className='ul-items'>
                {NAV_ITEMS.map((item) => (
                  <li className='li-items' key={item.sectionId}>
                    <Link
                      className='menu-item'
                      to={item.sectionId === 'home' ? '/' : `/#${item.sectionId}`}
                      onClick={() => handleNavClick(item.sectionId)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
        </div>
    
    </div>
    </>
  );
};

export default MobileNav
