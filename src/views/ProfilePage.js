import React, { useEffect, useState } from 'react';

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Spinner
} from 'reactstrap';

// redux
import { useSelector } from 'react-redux';

// core components
import ExamplesNavbar from '../components/Headers/Navbars/ExamplesNavbar';
import ProfilePageHeader from '../components/Headers/ProfilePageHeader.js';
import DemoFooter from '../components/Footers/Footer.js';

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove('nav-open');

  useEffect(() => {
    document.body.classList.add('landing-page');
    return function cleanup() {
      document.body.classList.remove('landing-page');
    };
  }, []);
  const loading = useSelector(state => state.profile.loading);
  const profile = useSelector(state => state.profile.profile);
  const user = useSelector(state => state.auth.user);
  const { name, lastName, mail, avatar } = user;
  const {
    miniBio,
    numTel,
    birthDate,
    driverLicence,
    gender,
    smoke,
    music,
    discussion,
    ponctuality,
    car_modele,
    car_plateNum
  } = profile;
  return loading ? (
    <Spinner
      color='primary'
      style={{ width: '3rem', height: '3rem', display: 'flex' }}
      type='grow'
      className='mx-auto  my-auto'
    />
  ) : (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className='section profile-content'>
        <Container>
          <div className='owner'>
            <div className='avatar'>
              <img
                alt='...'
                className='img-circle img-no-padding img-responsive'
                src={avatar}
              />
            </div>
            <div className='name'>
              <h4 className='title'>
                {name}
                {'  '}
                {lastName} <br />
              </h4>
              <h6 className='description'>{numTel}</h6>
              <h6>{mail}</h6>
            </div>
          </div>
          <Row>
            <Col className='ml-auto mr-auto text-center' md='6'>
              <p>{miniBio}</p>
              <br />
              <Button className='btn-round' color='default' outline>
                <i className='fa fa-cog' /> Settings
              </Button>
            </Col>
          </Row>
          <br />
          <div className='nav-tabs-navigation'>
            <div className='nav-tabs-wrapper'>
              <Nav role='tablist' tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === '1' ? 'active' : ''}
                    onClick={() => {
                      toggle('1');
                    }}
                  >
                    Information personnel
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '2' ? 'active' : ''}
                    onClick={() => {
                      toggle('2');
                    }}
                  >
                    Préférences
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '3' ? 'active' : ''}
                    onClick={() => {
                      toggle('3');
                    }}
                  >
                    Voiture
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className='following' activeTab={activeTab}>
            <TabPane tabId='1' id='follows'>
              <Row>
                <Col className='ml-auto mr-auto' md='6'>
                  <ul className='list-unstyled follows'>
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Genre:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{gender}</small>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Date de naissance:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{birthDate}</small>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Permis de conduire depuis:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{driverLicence}</small>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId='2' id='follows'>
              <Row>
                <Col className='ml-auto mr-auto' md='6'>
                  <ul className='list-unstyled follows'>
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Ciguarettes:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{smoke}</small>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Musique:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{music}</small>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Discussion:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{discussion}</small>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className='text-center' tabId='3' id='following'>
              <Row>
                <Col className='ml-auto mr-auto' md='6'>
                  <ul className='list-unstyled follows'>
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Ciguarettes:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{smoke}</small>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Musique:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{music}</small>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg='7' md='4' xs='4'>
                          <h6>Discussion:</h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <small>{discussion}</small>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
