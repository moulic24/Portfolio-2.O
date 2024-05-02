import React,{useState} from 'react'
import './Projects.css';
import chat from '../../Images/chat.jpg';
import Eshoppe from '../../Images/Eshoppe.jpg';
import dashboard from '../../Images/dashboard.jpg';
import ambulance from '../../Images/ambulance.jpg';
import gfg from '../../Images/gfg.jpg';
const Projects = () => {
    const [indexSelected, setIndexSelected] = useState(0);
 
    const handleIconClick = (index) => {
      setIndexSelected(index);
    };
    const images = [
        {
          id: '1',
          description: 'DASHBOARD',
          imageUrl: dashboard,
          code: "https://github.com/moulic24/Dynamic-Dashboard",
          coden:'Github'
        },
        {
          id: '2',
          description: 'ESHOPPE',
          imageUrl: Eshoppe,
          code: "https://github.com/moulic24/E-Shoppe",
          coden:'Github'
        },
        {
          id: '3',
          description: 'CHAT APPLICATION',
          imageUrl: chat,
          code: "https://github.com/moulic24/Sockets",
          coden:'Github'
        },
        {
          id: '4',
          description: 'AMBULANCE TRACKER',
          imageUrl: ambulance,
          code: "https://github.com/moulic24/Ambulance-Connect-Pro",
          coden:'Github'
        },
        {
          id: '5',
          description: 'GFG',
          imageUrl: gfg,
          code: "https://github.com/moulic24/GFG-student-chapter",
          coden:'Github'
        },
      ];
      
    return (
    <>
      <div className="project-main">
            <span className='project-text'>Projects</span>
        </div>
    <div className="wrapper">
    <div className="container">
    {images.map((item, index) => (
      <div key={index}>
        {index===0 ? <input className='input-main' type="radio" name="slide" id={`c${index + 1}`} defaultChecked /> : <input className='input-main' type="radio" name="slide" id={`c${index + 1}`}  /> }
        <label htmlFor={`c${index + 1}`} className="card" onClick={() => handleIconClick(index)}>
          <img height='70%' width='100%' src={item.imageUrl} alt={item.description} />
          <div className={indexSelected===index ? "row" : "row1"} >
            <div className="icon">{item.id}</div>
            <div className={indexSelected===index ? "description" : "description1"} >
              <span className='des-txt'>{item.description}</span>
              <a className="git" href={item.code}>{item.coden}</a>

              {/* <p>Gets better every day - stay tuned</p> */}
            </div>
          </div>
        </label>
      </div>
    ))}
        {/* <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
            <img height='70%' width='100%' src="https://brainpod.ai/wp-content/uploads/2024/04/ai-stock-photo-generator-2024-04-15T150214.000Z.png"/>
            <div className="row">
                <div className="icon">2</div>
                <div className="description">
                    <h4>Digital Technology</h4>
                    <p>Gets better every day - stay tuned</p>
                </div>
            </div>
            
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
            <div className="row">
                <div className="icon">3</div>
                <div className="description">
                    <h4>Globalization</h4>
                    <a href=''>Github</a>
                    <p>Help people all over the world</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
            <div className="row">
                <div className="icon">4</div>
                <div className="description">
                    <h4>New technologies</h4>
                    <p>Space engineering becomes more and more advanced</p>
                </div>
            </div>
        </label> */}
    </div>
</div>
</>
  )
}

export default Projects
