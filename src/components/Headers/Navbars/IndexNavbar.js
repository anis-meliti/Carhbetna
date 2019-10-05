import React, { useEffect } from 'react';
// nodejs library that concatenates strings
import classnames from 'classnames';
// react router
import { Link } from 'react-router-dom';
// redux
import { useSelector, connect } from 'react-redux';
import { logout } from '../../../js/actions/auth';
import { clearProfile } from '../../../js/actions/profile';
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Spinner
} from 'reactstrap';
// My Components
import SignInModal from '../../Modals/SignInModal';

function IndexNavbar({ logout, clearProfile }) {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

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
  // the modal set
  const [loginModal, setloginModal] = React.useState(false);
  // loading user
  const isAuth = useSelector(state => state.auth.isAuth);
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);
  const visitorNavbar = (
    <Collapse className='justify-content-end' navbar isOpen={navbarCollapse}>
      <Nav navbar>
        <NavItem>
          <Link to='/register'>
            <NavLink>
              <i className='nc-icon' />
              inscription
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Button
            className='btn-round'
            color='danger'
            onClick={() => setloginModal(true)}
          >
            connexion
          </Button>
        </NavItem>
      </Nav>
    </Collapse>
  );
  const authNavbar = (
    <Collapse className='justify-content-end' navbar isOpen={navbarCollapse}>
      <Nav navbar>
        <NavItem>
          <NavLink href='/profile'>
            <i className='nc-icon' />
            {user.name}
          </NavLink>
        </NavItem>
        <NavItem>
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
        </NavItem>
      </Nav>
    </Collapse>
  );
  return loading ? (
    <Spinner color='primary ' />
  ) : (
    <>
      <Navbar className={classnames('fixed-top', navbarColor)} expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              data-placement='bottom'
              href='/'
              title='Coded by Creative Tim'
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
          {isAuth ? authNavbar : visitorNavbar}
        </Container>
      </Navbar>

      <SignInModal isOpen={loginModal} toggle={() => setloginModal(false)} />
    </>
  );
}

export default connect(
  null,
  { logout, clearProfile }
)(IndexNavbar);
