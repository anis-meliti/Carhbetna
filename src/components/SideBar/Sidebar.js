import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import '../../assets/css/dashboard.css';

const Sidebar = () => {
  {
    console.log(
      'TCL: Sidebar -> window.location.pathname',
      window.location.pathname
    );
  }
  return (
    <div className='sidebar' data-color='primary' data-active-color='info'>
      <div className='logo'>
        <a href='/' className='simple-text logo-normal'>
          Carhbetna
        </a>
      </div>
      <div className='sidebar-wrapper'>
        <Nav>
          <li
            className={
              window.location.pathname === '/dashboard/addtraject'
                ? 'active'
                : ''
            }
          >
            <NavLink
              to='/dashboard/addtraject'
              className='nav-link'
              activeClassName='active'
            >
              <p>Ajouter un trajet</p>
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/dashboard' ? 'active' : ''
            }
          >
            <NavLink
              to='/dashboard'
              className='nav-link active'
              activeClassName='active'
            >
              <p>Supprimer un trajet</p>
            </NavLink>
          </li>
          <li
            className={
              window.location.pathname === '/dashboard/user' ? 'active' : ''
            }
          >
            <NavLink
              to='/dashboard/user'
              className='nav-link'
              activeClassName='active'
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
