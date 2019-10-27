import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../js/actions/auth';
import { clearProfile } from '../../../js/actions/profile';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Button
} from 'reactstrap';

const DashboardNavBar = () => {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  const isAuth = useSelector(state => state.auth.isAuth);
  const user = useSelector(state => state.auth.user);
  const { avatar, name } = user;
  const dispatch = useDispatch();
  {
  }
  const authNavbar = (
    <Collapse className='justify-content-end' navbar isOpen={navbarCollapse}>
      <Nav navbar>
        <NavItem>
          <Button
            className='btn-round'
            color='danger'
            onClick={() => {
              dispatch(logout());
              dispatch(clearProfile());
            }}
          >
            Se déconnecter
          </Button>
        </NavItem>
      </Nav>
    </Collapse>
  );

  return (
    <Navbar
      className={classnames('fixed-top', ' dark-panel-header ')}
      color-on-scroll='300'
      expand='lg'
    >
      <Container>
        <div className='navbar-translate'>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse
          className='justify-content-end'
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {isAuth && authNavbar}
            <NavItem>
              <div className='author'>
                <img
                  src={avatar}
                  className='img-details  img-circle  img-responsive '
                  alt='...'
                />
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default DashboardNavBar;
