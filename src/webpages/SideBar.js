import React from 'react';
import { NavLink } from 'react-router-dom';
import bgimg from "../Images/mb-logo.jpg";
import "../CSS/style.css";

const SideBar = () => {
  
  return (
    <div>
    <header className='sidebar'>
  <div className="container-fluid">
    <div className='row'>
   <div className='col-md-3 p-0'>
    <div className="col-sm-auto  sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap  align-items-center sticky-top">
                <NavLink to="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="">
                    <img className='logo' src={bgimg} alt="" />
                </NavLink>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                    <li className="nav-item button5">
                        <NavLink to="/" className="nav-link py-3 px-2" title="Home" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi bi-house fs-1 c-white"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item button5">
                        <NavLink to="/about" className="nav-link py-3 px-2" title="About" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="About">
                        <i className="bi bi-file-text fs-1 c-white"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item button5">
                        <NavLink to="/skills" className="nav-link py-3 px-2" title="Skills" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Skills">
                            <i className="bi bi-award fs-1 c-white"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item button5">
                        <NavLink to="projects" className="nav-link py-3 px-2" title="Projects" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Projects">
                            <i className="bi bi-layers fs-1 c-white"></i>
                        </NavLink>
                    </li>
                    <li className="nav-item button5">
                        <NavLink to="/contact" className="nav-link py-3 px-2" title="Contact" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Contact">
                            <i className="bi bi-person-rolodex fs-1 c-white"></i>
                        </NavLink>
                    </li>
                </ul>
                
            </div>
        </div>
        </div>
       {/* <div className='col-md-8 p-0'>
            <figure>
              <img className='img1' src={developer} alt="" />
            </figure>
  </div>*/}
        </div>
      </div>
      <div className="bg"></div>
        <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        </div>
   </header>
   </div>
  )
}

export default SideBar
