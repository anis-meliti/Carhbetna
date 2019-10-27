import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../assets/css/dashboard.css';

const Sidebar = () => {
  return (
    <div className='sidebar' data-color='blue'>
      <div className='logo'>
        <a href='/' className='simple-text logo-normal'>
          <div className='logo-img'>Carhbetna</div>
        </a>
      </div>
      <div className='sidebar-wrapper'>
        <ul className='nav'>
          <NavLink
            to='/dashboard/addtraject'
            activeClassName='active'
            className='nav-link'
          >
            Ajouter trajet
          </NavLink>
          <NavLink
            to='/dashboard/'
            activeClassName='active'
            className='nav-link'
          >
            Supprimer trajet
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
