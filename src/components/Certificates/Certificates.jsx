import {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import CLang from '../../Images/CLang.png'
import Cpp from '../../Images/Cpp.png'
import Python from '../../Images/Python.png'
import CCNA from '../../Images/CCNA.png'
import dsa from '../../Images/dsa.png'
import CyberSecurity from '../../Images/CyberSecurity.png'
import gfg from '../../Images/gfg.png'
// Import Swiper styles
import 'swiper/css';
import './Certificates.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from "react-slick";
export default () => {
const sliderRef = useRef();
const settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 2,
slidesToScroll: 1,
arrows: false,
responsive: [
{
breakpoint: 769,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
},
},
],
};
  return (
    <div className='maindiv'>
    <div className="certificates">
      <div className="certify-text">Certificates</div>
    </div>
    <div className='swiper-main'>
    <Swiper style={{width:'auto',height:'450px',justifyContent:'center',alignItems:'center'}}
     
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <div className='images-main'>
      <SwiperSlide ><div style={{margin:'20px', display:'flex',height:'100%',textAlign:'center', margin:'auto'}}><img  className='img-cert' style={{ userSelect:'none', border:'3px solid #7a65e6',boxShadow: '0 0 45px #a993fe', margin:'auto', justifyContent:'center',alignItems:'center'}}  src={CLang}/></div></SwiperSlide>
      <SwiperSlide ><div style={{margin:'20px', display:'flex',height:'100%',textAlign:'center', margin:'auto'}}><img   className='img-cert' style={{ userSelect:'none', border:'3px solid #7a65e6',boxShadow: '0 0 45px #a993fe', margin:'auto', justifyContent:'center',alignItems:'center'}}  src={Cpp}/></div></SwiperSlide>
      <SwiperSlide ><div style={{margin:'20px', display:'flex',height:'100%',textAlign:'center', margin:'auto'}}><img   className='img-cert' style={{ userSelect:'none', border:'3px solid #7a65e6',boxShadow: '0 0 45px #a993fe', margin:'auto', justifyContent:'center',alignItems:'center'}}  src={Python}/></div></SwiperSlide>
      <SwiperSlide ><div style={{margin:'20px', display:'flex',height:'100%',textAlign:'center', margin:'auto'}}><img  className='img-cert' style={{ userSelect:'none',border:'3px solid #7a65e6',boxShadow: '0 0 45px #a993fe', margin:'auto', justifyContent:'center',alignItems:'center'}}  src={CCNA}/></div></SwiperSlide>
      <SwiperSlide ><div style={{margin:'20px', display:'flex',height:'100%',textAlign:'center', margin:'auto'}}><img   className='img-cert' style={{ userSelect:'none',border:'3px solid #7a65e6',boxShadow: '0 0 45px #a993fe', margin:'auto', justifyContent:'center',alignItems:'center'}}  src={CyberSecurity}/></div></SwiperSlide>
      <SwiperSlide ><div style={{margin:'20px', display:'flex',height:'100%',textAlign:'center', margin:'auto'}}><img   className='img-cert' style={{ userSelect:'none',border:'3px solid #7a65e6',boxShadow: '0 0 45px #a993fe', margin:'auto', justifyContent:'center',alignItems:'center'}}  src={gfg}/></div></SwiperSlide>
      <SwiperSlide ><div style={{margin:'20px', display:'flex',height:'100%',textAlign:'center', margin:'auto'}}><img  className='img-cert' style={{ userSelect:'none',border:'3px solid #7a65e6',boxShadow: '0 0 45px #a993fe', margin:'auto', justifyContent:'center',alignItems:'center'}}  src={dsa}/></div></SwiperSlide>
      </div>
      
    </Swiper>
    </div>
    </div>
  );
};