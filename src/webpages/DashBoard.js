import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const DashBoard = () => {
  return (
    <div className=''>
      <section className="h-bar">
      <div className='container-fluid'>
                  <div className='col-md-12'>
                      <ul className='social-medial'>
                        <li><NavLink to="https://www.linkedin.com/in/mitali-bhavsar0202" target="_blank" title="LinkedIN" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="LinkedIN"><i className="bi bi-linkedin"></i></NavLink></li>
                        <li><NavLink to="https://github.com/Mitali-Bhavsar" title="GitHub" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="GitHub"><i className="bi bi-github"></i></NavLink></li>
                        <li><NavLink to="https://app.netlify.com/teams/mitali-bodkhe/sites" title="Netlify" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Netlify"><i className="bi bi-globe2"></i></NavLink></li>
                      </ul>
                  </div>
                 
                </div>
           
        
      </section>
    <section>
    <div className='container'>
        <div className='row'>
            <div className='col-md-2'>
            <SideBar />
            </div>
            <div className='col-md-10'>
            <Outlet />
            </div>
        </div>
    </div>
   </section>
   </div>
  )
}

export default DashBoard