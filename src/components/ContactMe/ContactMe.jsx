import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
const ContactMe = () => {
  return (
    <div className='contact-container'>
     <div className='text-main'>
     <span style={{fontSize:"25px"}}>Reach out to me</span>
      <span style={{fontSize:'50px',fontWeight:700}}>Contact</span>
     </div>
      <div className="contact-content">
        {/* <div style={{flex:1}}>
            <ContactInfoCard
            name='Github'
            // iconUrl="<GitHubIcon/>"
            text='moulic523@gmail.com'
            />
            <ContactInfoCard
             name='Mail'
            // iconUrl="<MailIcon/>"
            text='abc@gmail.com'
            />
        </div> */}
        <div style={{flex:1}}>
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
