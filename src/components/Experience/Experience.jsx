import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import eternal from '../../Images/eternal.png';
import './Experience.css';

const Experience = () => {
  return (
    <div>
        <div className="we-main">
            <span className='we-text'>Work Experience & Education</span>
        </div>
        <div className="vertical-main">
      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #1D1836' }}
    date="June 2024 – Dec 2024 · Hyderabad"
    iconStyle={{ background: 'white', color: '#1D1836' }}
    icon={<SchoolIcon className="timeline-work-icon" />}
  >
    <span style={{fontSize:'20px'}} className="vertical-timeline-element-title">Vignan's Institute of Information Technology</span>
    <h4 style={{lineHeight:'40px'}} className="vertical-timeline-element-subtitle">Bachelor's in Computer Science</h4>
    <h4 className="vertical-timeline-element-subtitle">2020-2024</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #1D1836' }}
    date="Dec 2024 – Present · Hyderabad"
    iconStyle={{ background: 'white', color: '#1D1836' }}
    icon={<WorkIcon className="timeline-work-icon" />}
  >
    <span style={{fontSize:'25px'}} className="vertical-timeline-element-title">Jr Software Engineer</span>
    <h3 style={{lineHeight:'40px'}} className="vertical-timeline-element-subtitle">Rapidue Technologies (Recykal)</h3>
    <ul className="exp-list">
        <ul>
          <li>Developed 4+ React.js modules using Material UI, improving UI performance and reducing load time by 20%, while integrating Google Analytics tracking for data-driven product insights.</li>
          <li>Built cross-platform desktop modules using Electron.js, React.js, and Node.js to support printer integration workflows.</li>
          <li>Contributed to the Printing Test Bed Portal, developing key UI modules and a Build Management system for uploading, managing, and downloading software builds.</li>
        <li>Implemented Redux Toolkit & RTK Query for efficient API integration, caching, and scalable state management while following Agile SDLC, code reviews, and version control with Git.</li>
        </ul>
    </ul>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1D1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #1D1836' }}
    date="June 2024 – Dec 2024 · Hyderabad"
    iconStyle={{ background: 'white', color: '#1D1836' }}
    icon={<WorkIcon className="timeline-work-icon" />}
  >
    <span style={{fontSize:'25px'}} className="vertical-timeline-element-title">Software Trainee</span>
    <h3 style={{lineHeight:'40px'}} className="vertical-timeline-element-subtitle">Recykal</h3>
    <ul className="exp-list">
      <li>Contributed new modules to a production codebase within 6 months of onboarding &amp; resolved 90% of critical bugs.</li>
    </ul>
  </VerticalTimelineElement>

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
</VerticalTimeline>
</div>
    </div>
  )
}

export default Experience
