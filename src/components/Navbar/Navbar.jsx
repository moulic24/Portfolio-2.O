import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../Images/bitmoji-icon.png';
import { NAV_ITEMS } from '../../utils/constants';
import MobileNav from '../MobileNav/MobileNav';
import './Navbar.css';
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (sectionId) => {
    const hash = sectionId === 'home' ? '' : `#${sectionId}`;
    navigate(`/${hash}`);
  };
  const [openMenu,setOpenMenu] = useState(false);
  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }
  
  const innerWidth = window.innerWidth < 700
  
  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img  className="logo" src={icon} alt="nav-logo"/>
            <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.sectionId}>
                    <Link
                      className='menu-item'
                      to={item.sectionId === 'home' ? '/' : `/#${item.sectionId}`}
                      onClick={() => handleClick(item.sectionId)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
            { innerWidth && <button className='menu-btn' onClick={toggleMenu}>
              <span className='menu-img'
              style={{fontSize:'1.8rem'}}
              >
               {openMenu ? <CloseIcon/> : <MenuIcon/>}
              </span>
            </button> }
        </div>
      </nav>
    </>
  )
}

export default Navbar
