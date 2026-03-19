import EastIcon from '@mui/icons-material/East';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import techie from '../../Images/man-working.gif';
import ContactMe from '../ContactMe/ContactMe';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css';
import { EXTERNAL_LINKS, HOME_ROLES } from '../../utils/constants';
const Home = () => {
  const location = useLocation();

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionId = location.hash.replace('#', '');
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <>
    <section id='home' className='home-container reveal-on-scroll'>
        <div className="home-content hero-fade">

            <h2 className='highlight-text'>Hello world!</h2>
            
            <span style={{fontSize:'30px',fontFamily:'sans-serif'}} className='typing-text'>This is <span>Chandra Mouli</span> , A<span> <TypeAnimation sequence={[
                HOME_ROLES[0],
                2000,
                HOME_ROLES[1],
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
                    <span style={{fontSize:'20px'}}>I am a Full Stack / Frontend Engineer with 1+ year of professional experience building scalable web and desktop applications using React.js, Node.js, and modern JavaScript ecosystems.

Currently working as a Junior Software Engineer, I contribute to the development of production-grade platforms and Electron-based desktop applications used in enterprise environments. My work focuses on building performant user interfaces, designing reliable backend integrations, and improving application scalability and maintainability.

I am motivated by opportunities to solve complex problems, build high-impact products, and collaborate with strong engineering teams delivering technology at scale.</span>
               </div>
                )}
             </div>
            <div className="social-icon">
               <a href={EXTERNAL_LINKS.LINKEDIN}><LinkedInIcon/></a>
               <a href={EXTERNAL_LINKS.GITHUB}><GitHubIcon/></a>
               <a href={EXTERNAL_LINKS.EMAIL}><MailIcon/></a>
            </div>
              
              <a href={EXTERNAL_LINKS.RESUME} className='btn'>Resume <EastIcon/></a>
        </div>
        <div className="home-img hero-fade hero-fade-delay">
            <img className="techie-img" src={techie} alt="" />    
        </div>
    </section>
    <div id='skills' className='reveal-on-scroll'><Skills/></div>
    <div id='experience' className='reveal-on-scroll'><Experience/></div>
    <div id='projects' className='reveal-on-scroll'><Projects/></div>
    {/* <Certificates/> */}
    <div id='contact' className='reveal-on-scroll'><ContactMe/></div>
    <div className='reveal-on-scroll'><Footer/></div>
    </>
    
  )
}

export default Home
