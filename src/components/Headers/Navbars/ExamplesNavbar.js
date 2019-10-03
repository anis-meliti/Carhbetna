import React from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
import classnames from 'classnames';
// redux
import { connect } from 'react-redux';
import { logout } from '../../../js/actions/auth';
import { clearProfile } from '../../../js/actions/profile';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from 'reactstrap';

function ExamplesNavbar({ logout, clearProfile }) {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  React.useEffect(() => {
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
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll='300'
      expand='lg'
    >
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            to='/'
            title='Coded by Creative Tim'
            tag={Link}
          >
            Carhbetna
          </NavbarBrand>
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
            <NavItem>
              <NavLink>
                <Button
                  className='btn-round'
                  color='danger'
                  onClick={() => {
                    logout();
                    clearProfile();
                  }}
                >
                  Se déconnecter
                </Button>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://twitter.com/'
                target='_blank'
                title='Follow us on Twitter'
              >
                <i className='fa fa-twitter' />
                <p className='d-lg-none'>Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://www.facebook.com/'
                target='_blank'
                title='Like us on Facebook'
              >
                <i className='fa fa-facebook-square' />
                <p className='d-lg-none'>Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement='bottom'
                href='https://www.instagram.com/'
                target='_blank'
                title='Follow us on Instagram'
              >
                <i className='fa fa-instagram' />
                <p className='d-lg-none'>Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default connect(
  null,
  { logout, clearProfile }
)(ExamplesNavbar);
