import React, { useState } from 'react';
import {
  Modal,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from 'reactstrap';
import Switch from 'react-bootstrap-switch';

const AlterProfile = ({ isOpen, hide, profile }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const changeHandler = e => {
    console.log(e.target.checked);
  };
  const switchHandler = (el, value) => console.log(el.props.name, value);
  const {
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

  return (
    <Modal isOpen={isOpen} toggle={hide}>
      <div className='modal-header'>
        <h5 className='modal-title' id='exampleModalPopoversLabel'>
          Modal title
        </h5>
        <button
          aria-label='Close'
          className='close'
          data-dismiss='modal'
          type='button'
          onClick={hide}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <div className='modal-body'>
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
                      <Col lg='7' md='4' xs='4'>
                        <h6>Ciguarettes:</h6>
                      </Col>
                      <Col lg='3' md='4' xs='4'>
                        <Switch
                          name='smokeField'
                          offColor='success'
                          offText={<i className='nc-icon nc-simple-remove' />}
                          onColor='success'
                          onText={<i className='nc-icon nc-check-2' />}
                          onChange={(el, value) => switchHandler(el, value)}
                        />
                        {/* <small> {smoke}</small> */}
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
                        <Switch
                          name='musicField'
                          offColor='success'
                          offText={<i className='nc-icon nc-simple-remove' />}
                          onColor='success'
                          onText={<i className='nc-icon nc-check-2' />}
                          onChange={(el, value) => switchHandler(el, value)}
                        />
                        {/* <small>{music}</small> */}
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
                        <Switch
                          name='discussionField'
                          offColor='success'
                          offText={<i className='nc-icon nc-simple-remove' />}
                          onColor='success'
                          onText={<i className='nc-icon nc-check-2' />}
                          onChange={(el, value) => switchHandler(el, value)}
                        />
                        {/* <small>{discussion}</small> */}
                      </Col>
                    </Row>
                  </li>
                  <hr />
                  <li>
                    <Row>
                      <Col lg='7' md='4' xs='4'>
                        <h6>Ponctualité:</h6>
                      </Col>
                      <Col lg='3' md='4' xs='4' style={{ marginTop: '11px' }}>
                        <Switch
                          name='ponctualityField'
                          offColor='success'
                          offText={<i className='nc-icon nc-simple-remove' />}
                          onColor='success'
                          onText={<i className='nc-icon nc-check-2' />}
                          onChange={(el, value) => switchHandler(el, value)}
                        />
                        {/* <small>{ponctuality}</small> */}
                      </Col>
                    </Row>
                  </li>
                  <hr />
                </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane className='text-center' tabId='2' id='following'>
            <Row>
              <Col className='ml-auto mr-auto' md='6'>
                <ul className='list-unstyled follows'>
                  <li>
                    <Row>
                      <Col lg='7' md='4' xs='4'>
                        <h6>Modele :</h6>
                      </Col>
                      <Col lg='3' md='4' xs='4'>
                        <small>{car_modele}</small>
                      </Col>
                    </Row>
                  </li>
                  <hr />
                  <li>
                    <Row>
                      <Col lg='7' md='4' xs='4'>
                        <h6>N° de plaque:</h6>
                      </Col>
                      <Col lg='3' md='4' xs='4'>
                        <small>{car_plateNum}</small>
                      </Col>
                    </Row>
                  </li>
                  <hr />
                </ul>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      <div className='modal-footer'>
        <div className='left-side'>
          <Button
            className='btn-link'
            color='default'
            onClick={hide}
            type='button'
          >
            Never mind
          </Button>
        </div>
        <div className='divider' />
        <div className='right-side'>
          <Button className='btn-link' color='danger' type='button'>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AlterProfile;
