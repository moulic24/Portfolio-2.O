import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import './ContactInfoCard.css'
const ContactInfoCard = ({name,text}) => {
  return (
    <div className='contact-details-card'>
      <div className="icon">
      {name == "Github" ? <GitHubIcon className='img'/> : name== "Mail" ? <MailIcon className='img'/> : <LinkedInIcon/>}
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
