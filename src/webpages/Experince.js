import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const Experince = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="container">
      <div className='animate three'><span>E</span><span>x</span><span>p</span><span>e</span><span>r</span><span>i</span><span>e</span><span>n</span>
      <span>c</span><span>e</span><span></span><span></span><span></span><span></span>
      </div>
      <div className='row'>
        <div className='col-md-12 text-start'>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2300"><span className='heading1' >Enut Technologies Pvt Ltd |</span><span className='heading2'> Jr. UI Developer </span><span><em> (2023 - Present)</em></span></p>
            <p>•	Role includes website design, layout design, cross functional team co-ordination.</p>
            <p>•	An effective communicator with excellent relationship building and interpersonal skills. Strong analytical, problem solving and organizational ability.</p>
            <p>•	Worked on online project, BIET: Bharat Institute of Engineering and Technology and HEALTH AT HOMES.</p>
            <p>•	Extensive experience in UI technologies like HTML, CSS, JavaScript, React, jQuery.</p>
            <p>•	 Able to create SPA, device compatibility website by using bootstrap, CSS.</p>
        </div>
        <div className='col-md-12 text-start'>
            <p data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="2300"><span className='heading1' >Seisotech Pvt Ltd | </span><span className='heading2'> Associate Developer </span><span><em> (2017 - 2018)</em></span></p>
            <p>•	I designed, developed, troubleshoot, debugged and implemented software code for software component of web applications.</p>
            <p>•	Implemented changes and integrated requested elements to streamline business operations.</p>
            <p>•	Researched, tested and built and coordinated the integration of new products as per productions and client requirements.</p>
            <p>•	Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations.</p>
        </div>
    
    </div>
  </div>
  )
}

export default Experince