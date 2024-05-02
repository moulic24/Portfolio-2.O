import React,{useState} from 'react'
import './Home.css';
import techie from '../../Images/man-working.gif'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import EastIcon from '@mui/icons-material/East';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Certificates from '../Certificates/Certificates';
import ContactMe from '../ContactMe/ContactMe';
import {TypeAnimation} from 'react-type-animation';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
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
            
            {/* <h2>
              I am <span>Chandra Mouli</span>
              <span className='mr-4'>A</span>
              <TypeAnimation sequence={[
                'Web Developer',
                2000,
                'Competitive Programmer',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}/>
            </h2> */}
            <span style={{fontSize:'30px',fontFamily:'sans-serif'}} className='typing-text'>This is <span>Chandra Mouli</span> , A<span> <TypeAnimation sequence={[
                'Web Developer',
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
                    <h2>Overview</h2>
                    <span style={{fontSize:'20px'}}>This is Chandra Mouli. I am a 2024 B.Tech CSE graduate 🎓. I love in transforming concepts into visually stunning web applications 💘. I am a Web Developer experienced in building wonderful dashboards for multiple organizations and also in building robust backend systems 🚀. I am an open-source enthusiast and a competitive programmer. Apart from coding my hobbies are playing Badminton and exploring new technologies.</span>
               </div>
                )}
             </div>
            <div className="social-icon">
               <a href='https://www.linkedin.com/in/chandra-mouli-3b5507237/'><LinkedInIcon/></a>
               <a href='https://github.com/moulic24'><GitHubIcon/></a>
               <a href='mailto:moulic523@gmail.com'><MailIcon/></a>
            </div>
              
              <a href="https://drive.google.com/file/d/1HczS276MhnXocJ9b6L9zWv1lyjsADfks/view?usp=drive_link" className='btn'>Resume <EastIcon className='shake-icon'/></a>
        </div>
        <div className="home-img">
            <img className="techie-img" src={techie} alt="" />    
        </div>
    </section>
    <Skills/>
    <Experience/>
    <Projects/>
    <Certificates/>
    <ContactMe/>
    <Footer/>
    </>
    
  )
}

export default Home
