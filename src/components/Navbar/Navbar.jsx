import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import icon from '../../Images/bitmoji-icon.png';
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from '../MobileNav/MobileNav';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
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
                <li>
                <Link className='menu-item' onClick={() => handleClick('/') }to='/'>Home</Link>
                </li>
                <li>
                <Link className='menu-item' to='/skills'>Skills</Link>
                </li>
                <li>
                <Link className='menu-item' to='/experience'>Work Experience</Link>
                </li>
                <li>
                <Link className='menu-item' to='/projects'>Projects</Link>
                </li>
                <li>
                <Link className='menu-item' to='/certificates'>Certificates</Link>
                </li> 
                <li>
                <Link className='menu-item' to='/contactme'>Contact Me</Link>
                </li>
                <a href="mailto:moulic523@gmail.com" className='contact-btn'>Hire Me</a>
            </ul>
            { innerWidth && <button class='menu-btn' onClick={toggleMenu}>
              <span class='menu-img'
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
