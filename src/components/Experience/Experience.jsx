import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import eternal from '../../Images/eternal.png';
import ologo from '../../Images/ologo.png'
const Experience = () => {
  return (
    <div>
        <div className="we-main">
            <span className='we-text'>Work Experience</span>
        </div>
        <div className="vertical-main">

       
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
    date="March 2024 - Present"
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<img  className='eternalr-img' src={eternal} alt="Work Image"/>}
  >
    <span style={{fontSize:'25px'}} className="vertical-timeline-element-title">Frontend Developer</span>
    
    <h3 style={{lineHeight:'40px'}} className="vertical-timeline-element-subtitle">Eternal Robotics</h3>
    {/* <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
    <ul>
    <li>Led the creation of a comprehensive dashboards for renowned organizations such as</li>
        <ul style={{lineHeight:'25px'}}>
        <li style={{listStyle:'none',marginTop:'10px'}}>- Mahindra & Mahindra</li>
        <li style={{listStyle:'none'}}>- MSIL</li>
        </ul>
  
</ul>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #1D1836' }}
    date="December 2023 - March 2024"
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<a href="https://drive.google.com/file/d/1P3OnIxAtZueV5TDqBTZyU12-YRtPYIaG/view?usp=sharing"><img  className='eternal-img'  src="https://slashmark.cloud/images/aicte.png" alt="Work Image"/></a>}
  >
    <span style={{fontSize:'25px'}}  className="vertical-timeline-element-title">Full Stack Developer</span>
    
    <h3 style={{lineHeight:'40px'}}  className="vertical-timeline-element-subtitle">Slash Mark - AICTE</h3>
    <ul>
    
   
        <ul style={{lineHeight:'20px'}}>
            <li className='sub'>I've proficiently completed the tasks, which involved thorough debugging and frontend optimizations, resulting in an elevated user experience. ⚙️</li>
            <li style={{marginTop:'15px'}} className='sub'>Created an online portal with a farmer-friendly interface, powered by React framework, to facilitate direct sales of dairy products from the farm to consumers. 🧑‍💻</li>
        </ul>
  
</ul>

  </VerticalTimelineElement>    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
    date="June 2023 - July 2023"
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<a href="https://drive.google.com/file/d/1B8iw8xvQvmF_nfVc9EZz_9fV8IElR6QC/view?usp=sharing"><img  className='eternal-img' src={ologo} alt="Work Image"/></a>}
  >
    <span style={{fontSize:'25px'}}  className="vertical-timeline-element-title">Web Developer</span>
    
    <h3 style={{lineHeight:'40px'}}  className="vertical-timeline-element-subtitle">Ocatnet</h3>
    {/* <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
    <ul>
    
   
        <ul style={{lineHeight:'20px'}}>
            <li className='sub'>Developed a responsive landing page for a shoe-selling e-commerce store using HTML, CSS, JavaScript. 🧑‍💻</li>
            <li style={{marginTop:'15px'}} className='sub'>Created a dynamic To-dolist web app using React.js, enabling users to manage tasks and track their progress. 📈</li>
        </ul>
  
</ul>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
    date="July 2022 - July 2023"
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<a href="https://drive.google.com/file/d/1st-VSPaeBjckwvTGClDTB0HI_QRPJimt/view?usp=sharing"><img  className='eternal-img' src="https://media.geeksforgeeks.org/wp-content/uploads/20230403183704/gfg_logo.png" alt="Work Image"/></a>}
  >
    <span  style={{fontSize:'25px'}}  className="vertical-timeline-element-title">Technical Head</span>
    
    <h3 style={{lineHeight:'40px'}} className="vertical-timeline-element-subtitle">Geeks For Geeks</h3>
    {/* <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
    <ul>
   
   
        <ul  style={{lineHeight:'20px'}} >
        <li className='sub'>Developed a website for official GeeksForGeeks student chapter</li>
            <li  style={{marginTop:'15px'}} className='sub'>Collaborated with the team and organized Hackathons, and mentored 200+ students. 🤝</li>
            <li  style={{marginTop:'15px'}} className='sub'>Organized seminars for 300+ students and gave insights on Web Development, Networking, Operating Systems and Competitive Programming. 📢</li>
       
        </ul>
  
</ul>

  </VerticalTimelineElement>
 
  {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  /> */}
</VerticalTimeline>
</div>
    </div>
  )
}

export default Experience
