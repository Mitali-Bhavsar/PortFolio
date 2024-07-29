import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <section className='skills'>
      <div className="animate four">
			<span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span> &nbsp;
			<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
       </div>
       <div className='container'>
        <div className='row mb-5rem'>
          <div className='col-md-6'>
              <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000"><i className="bi bi-filetype-html px-3"></i>HTML5</p>
          </div>
          <div className='col-md-6'>
            <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000"><i className="bi bi-filetype-css px-3"></i>CSS3</p>
          </div>
       
          <div className='col-md-6'>
              <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200"><i className="bi bi-bootstrap px-3"></i>BootStrap 5</p>
          </div>
          <div className='col-md-6'>
            <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200"><i className="bi bi-filetype-js px-3"></i>JavaScript</p>
          </div>
          <div className='col-md-6'>
            <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200"><i className="bi bi-filetype-js px-3"></i>ES6</p>
          </div>         
          <div className='col-md-6'>
            <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400"><i className="bi bi-braces px-3"></i>jQuery</p>
          </div>
          <div className='col-md-6'>
              <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400"><i className="bi bi-filetype-jsx px-3"></i>React JS</p>
          </div>
          <div className='col-md-6'>
              <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400"><i className="bi bi-shop-window px-3"></i>Redux</p>
          </div>
          <div className='col-md-6'>
              <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400"><i className="bi bi-collection px-3"></i>Material UI</p>
          </div>
          <div className='col-md-6'>
              <p className='s-skills' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400"><i className="bi bi-collection px-3"></i>Semantic UI</p>
          </div>
       </div> 

       </div>
    
    </section>
    
  )
}

export default Skills