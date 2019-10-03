import React from 'react';
// nodejs library that concatenates strings
import classnames from 'classnames';
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';
import SignInModal from '../../Modals/SignInModal';

function IndexNavbar() {
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
  const [loginModal, setloginModal] = React.useState(false);
  return (
    <>
      <Navbar className={classnames('fixed-top', navbarColor)} expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              data-placement='bottom'
              href='/index'
              target='_blank'
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
          <Collapse
            className='justify-content-end'
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <NavLink>
                  <i className='nc-icon' /> inscription
                </NavLink>
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
        </Container>
      </Navbar>

      <SignInModal isOpen={loginModal} toggle={() => setloginModal(false)} />
    </>
  );
}

export default IndexNavbar;
