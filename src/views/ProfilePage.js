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

// core components
import ExamplesNavbar from '../components/Headers/Navbars/ExamplesNavbar';
import ProfilePageHeader from '../components/Headers/ProfilePageHeader.js';
import DemoFooter from '../components/Footers/Footer.js';
// redux
import { connect, useSelector } from 'react-redux';

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
  const { miniBio, numTel, birthDate, driverLicence, gender } = profile;
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
              <h6 className='description'>{mail}</h6>
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
                    Préférences
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === '2' ? 'active' : ''}
                    onClick={() => {
                      toggle('2');
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
                        <Col className='ml-auto mr-auto' lg='2' md='4' xs='4'>
                          <img
                            alt='...'
                            className='img-circle img-no-padding img-responsive'
                            src={require('../assets/img/faces/clem-onojeghuo-2.jpg')}
                          />
                        </Col>
                        <Col className='ml-auto mr-auto' lg='7' md='4' xs='4'>
                          <h6>
                            Flume <br />
                            <small>Musical Producer</small>
                          </h6>
                        </Col>
                        <Col className='ml-auto mr-auto' lg='3' md='4' xs='4'>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=''
                                type='checkbox'
                              />
                              <span className='form-check-sign' />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className='mx-auto' lg='2' md='4' xs='4'>
                          <img
                            alt='...'
                            className='img-circle img-no-padding img-responsive'
                            src={require('../assets/img/faces/ayo-ogunseinde-2.jpg')}
                          />
                        </Col>
                        <Col lg='7' md='4' xs='4'>
                          <h6>
                            Banks <br />
                            <small>Singer</small>
                          </h6>
                        </Col>
                        <Col lg='3' md='4' xs='4'>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue='' type='checkbox' />
                              <span className='form-check-sign' />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className='text-center' tabId='2' id='following'>
              <h3 className='text-muted'>Not following anyone yet :(</h3>
              <Button className='btn-round' color='warning'>
                Trajet
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
