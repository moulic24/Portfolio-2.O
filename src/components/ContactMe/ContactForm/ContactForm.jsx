import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-content">
    
      <form>
        <div className="name-container">
         <div className='finput'>
         <p>Your name</p>
          <input className='inp' type="text" name="firstname" placeholder="What's your good name?" />
         </div>
          
        </div>
        <div className='finput'>
        <p>Your email</p>
        <input className='inp' type="text" name="email" placeholder="Please enter your mail" />
        </div>
        <div className='finput'>
        <p>Your Message</p>
        <textarea className='inp' type="text" name="message" placeholder="Do you have anything to say?" rows={3}/>
        </div>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
