import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Ehealthcare from '../Images/Ehealthcare.png';
import MabServices from '../Images/MabServices.png';
import ElearnDemo from '../Images/ElearnDemo.png';
import TreeFold from '../Images/TreeFold.png';
import MABPhotography from '../Images/MABPhotography.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
  <div>
     <section>
    <div className="animate three">
			<span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span>&nbsp;
			<span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
   </section>
   <section className='project'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <NavLink className='text-decoration-none' to="https://ehealthcareservice.netlify.app/" target="_blank">
            <img className="proj" src={Ehealthcare} alt="" data-aos="zoom-in" />
            <p className='text-white'>EHealthcare Project</p>
          </NavLink>
        </div>
        <div className='col-md-4'>
        <NavLink className='text-decoration-none' to="https://mabservices.netlify.app/" target="_blank" >
            <img className="proj" src={MabServices} alt="" data-aos="zoom-in" />
            <p className='text-white'>Mab Services</p>
          </NavLink>
        </div>
        <div className='col-md-4'>
        <NavLink className='text-decoration-none' to="https://mab-photography.netlify.app/" target="_blank" >
            <img className="proj" src={MABPhotography} alt="" data-aos="zoom-in" />
            <p className='text-white'>Mab Photography</p>
          </NavLink>
        </div>
       
      </div>
      <div className='row'>
      <div className='col-md-4'>
        <NavLink className='text-decoration-none' to="https://elearndemo.netlify.app/" target="_blank" >
            <img className="proj" src={ElearnDemo} alt="" data-aos="zoom-in" />
            <p className='text-white'> ELearning</p>
          </NavLink>
        </div>
        <div className='col-md-4'>
        <NavLink className='text-decoration-none' to="https://tree-fold.netlify.app/" target="_blank" >
            <img className="proj" src={TreeFold} alt="" data-aos="zoom-in" />
            <p className='text-white'>Tree Fold</p>
          </NavLink>
        </div>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4'>

        </div>
      </div>

    </div>
   </section>
  </div>
  )
}

export default Projects