import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
   <section>
    <div className="animate six">
			<span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> &nbsp;
		<span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div className='container'>
        <div className='row'>
          <div data-aos="flip-left" data-aos-easing="linear" data-aos-duration="1500">
            <p className='contact-font text-start text-info'><i className="bi bi-person-fill pe-4"></i><ins>Mitali Bhavsar.</ins></p>
            <p className='contact-font text-start'><i className="bi bi-geo-alt-fill pe-4"></i>Hyderabad,500016</p>
            <NavLink to="https://www.google.com/gmail/about/" target="_blank"><p className='contact-font text-start'><i className="bi bi-envelope-fill pe-4"></i>mitali.bodkhe@gmail.com</p></NavLink>
            <NavLink to="https://www.linkedin.com/in/mitali-bhavsar0202" target="_blank"><p className='contact-font text-start'><i className="bi bi-linkedin pe-4"></i>https://www.linkedin.com/in/mitali-bhavsar0202</p></NavLink>
         </div>
          
        </div>

      </div>
   </section>
  )
}
