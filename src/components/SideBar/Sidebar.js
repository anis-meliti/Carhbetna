import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import '../../assets/css/dashboard.css';

const Sidebar = () => {
  return (
    <div className='sidebar' data-color='black' data-active-color='info'>
      <div className='logo'>
        <a href='/' className='simple-text logo-normal'>
          Carhbetna
        </a>
      </div>
      <div className='sidebar-wrapper'>
        <Nav>
          <li>
            <NavLink
              to='/dashboard/addtraject'
              className='nav-link'
              activeClassName='nav-item'
            >
              <p>Ajouter un trajet</p>
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/dashboard'
              className='nav-link'
              activeClassName='.active'
            >
              <p>Supprimer un trajet</p>
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='/dashboard/user'
              className='nav-link'
              activeClassName='.active'
            >
              <p>Alter Profile</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
