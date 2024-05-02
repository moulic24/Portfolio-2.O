import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-div'>
        <div className="main-content">
            <div className="copyrights">
              <CopyrightIcon className='copy-icon'/>
          <span className='copyrights-text'>2024, All rights reserved</span>
            </div>
    <div className="footer-content">
    <ul className='ficon'>
        <li>
        <a href='https://github.com/moulic24'><GitHubIcon/></a>
        </li>
        <li>
        <a href='https://www.linkedin.com/in/chandra-mouli-3b5507237/'><LinkedInIcon/></a>
        </li>
        <li>
        <a href='mailto:moulic523@gmail.com'><MailIcon/></a>
        </li>
    </ul>
    </div>
        </div>
       
    </div>
  )
}

export default Footer
