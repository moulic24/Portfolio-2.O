import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css'
import { EXTERNAL_LINKS } from '../../utils/constants';
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
        <a href={EXTERNAL_LINKS.GITHUB}><GitHubIcon/></a>
        </li>
        <li>
        <a href={EXTERNAL_LINKS.LINKEDIN}><LinkedInIcon/></a>
        </li>
        <li>
        <a href={EXTERNAL_LINKS.EMAIL}><MailIcon/></a>
        </li>
    </ul>
    </div>
        </div>
       
    </div>
  )
}

export default Footer
