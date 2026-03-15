import EastIcon from '@mui/icons-material/East';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import techie from '../../Images/man-working.gif';
import ContactMe from '../ContactMe/ContactMe';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css';
const Home = () => {

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  return (
    <>
    <section className='home-container'>
        <div className="home-content">

            <h2 className='highlight-text'>Hello world!</h2>
            
            <span style={{fontSize:'30px',fontFamily:'sans-serif'}} className='typing-text'>This is <span>Chandra Mouli</span> , A<span> <TypeAnimation sequence={[
                'Software Engineer',
                2000,
                'Competitive Programmer',
                2000,
              ]}
              speed={40}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}/></span></span>
          <br/>
          <br/>
            <h3 className='glowing-text'>I thrive on transforming ideas into visually stunning web solutions</h3>
            <div className="button-overview">
               <button onClick={toggleDescription}>About Me</button>
                {showDescription &&  (
               <div className="card2">
                    <span style={{fontSize:'20px'}}>Software Engineer with 1+ year of experience building scalable web and desktop applications using React.js, Node.js, and modern JavaScript technologies.

Currently working as a Junior Software Engineer, contributing to production systems including web portals and Electron-based desktop applications, focusing on efficient UI development, analytics integration, and performance optimization.

Passionate about building full-stack MERN projects, improving system design skills, and solving real-world problems through technology.🚀</span>
               </div>
                )}
             </div>
            <div className="social-icon">
               <a href='https://www.linkedin.com/in/chandra-mouli-3b5507237/'><LinkedInIcon/></a>
               <a href='https://github.com/moulic24'><GitHubIcon/></a>
               <a href='mailto:moulic523@gmail.com'><MailIcon/></a>
            </div>
              
              <a href="https://drive.google.com/file/d/1HczS276MhnXocJ9b6L9zWv1lyjsADfks/view?usp=drive_link" className='btn'>Resume <EastIcon/></a>
        </div>
        <div className="home-img">
            <img className="techie-img" src={techie} alt="" />    
        </div>
    </section>
    <Skills/>
    <Experience/>
    <Projects/>
    {/* <Certificates/> */}
    <ContactMe/>
    <Footer/>
    </>
    
  )
}

export default Home
